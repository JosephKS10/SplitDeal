import { useState, useEffect } from "react";
import axios from "axios";
import ApiUrls from "../Api/ApiUrls";

const ORS_API_KEY = "5b3ce3597851110001cf62488d8c0611747a4fd18528e23d079d839b"; // Replace with your OpenRouteService API key

// Define type for location data
interface Location {
  properties: {
    id: string;
    label: string;
  };
  geometry: {
    coordinates: [number, number];
  };
}

// Props interface
interface LocationSearchDropdownProps {
  onSelect: (location: Location) => void;
}

const LocationSearchDropdown: React.FC<LocationSearchDropdownProps> = ({ onSelect }) => {
  const [query, setQuery] = useState<string>("");
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [currentLocation, setCurrentLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [mapVisible, setMapVisible] = useState<boolean>(false); // State to control map visibility
  const [locationError, setLocationError] = useState<string | null>(null); // Track location errors

  // Set selected location in the backend
  const setLocation = async (location: Location) => {
    const yourToken = localStorage.getItem('userToken');
    const tokenWithoutQuotes = yourToken?.replace(/^"|"$/g, "");
    if (yourToken) {
      try {
        await axios.put(
          ApiUrls.locationSet,
          { location: location.properties.label },
          {
            headers: {
              Authorization: `Bearer ${tokenWithoutQuotes}`,
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.error("Error updating location:", error);
        setError("Error updating the location. Please try again.");
      }
    } else {
      console.error("No authentication token found.");
    }
  };

  // Debounced search function
  const fetchLocations = async (searchText: string) => {
    if (!searchText) {
      setLocations([]);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("https://api.openrouteservice.org/geocode/search", {
        params: {
          api_key: ORS_API_KEY,
          text: searchText,
          size: 5,
          "boundary.country": "AU",
          "boundary.city": "Melbourne",
        },
      });
      setLocations(response.data.features || []);
    } catch (error) {
      setError("Error fetching locations. Please try again.");
      console.error("Error fetching locations:", error);
    } finally {
      setLoading(false);
    }
  };

  // Debounce query changes
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLocations(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  // Get user's current location
  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLocationError(null); // Reset any previous error
        },
        (error) => {
          console.error("Error getting current location:", error);
          setLocationError("Failed to get your location. Please enable location services.");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLocationError("Geolocation is not supported by your browser.");
    }
  };

  // Handle location selection
  const handleSelectLocation = (location: Location) => {
    setQuery(location.properties.label);
    setLocations([]);
    onSelect(location);
    setLocation(location);
  };

  // Handle location icon click to toggle map visibility
  const handleLocationIconClick = () => {
    if (currentLocation) {
      setMapVisible(!mapVisible); // Toggle map visibility if location is available
    } else {
      requestLocation(); // Request location if not already available
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-2">
      
      <div className="w-full flex flex-col gap-2">
  <label htmlFor="location-search" className="sr-only">
    Search location
  </label>
  <div className="flex items-center gap-2">
    <input
      id="location-search"
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search location..."
      className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
    <button
      className="size-13 px-3 inline-flex justify-center items-center text-sm font-medium rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </button>
  </div>
  <div className="flex items-center justify-between">
    <a className="text-orange-500 flex gap-2 justify-center items-center text-sm cursor-pointer" onClick={handleLocationIconClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-locate-fixed"><line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/></svg> Use my location
    </a>
    {loading && <p className="text-gray-500 text-sm">Loading...</p>}
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
</div>


      {locations.length > 0 && (
        <ul
          className="absolute w-100 sm-w-50 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10 sm:left-10 left-[16%]"
          style={{ top: "93%"}}
        >
          {locations.map((location) => (
            <li
              key={location.properties.id}
              onClick={() => handleSelectLocation(location)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {location.properties.label}
            </li>
          ))}
        </ul>
      )}

      {/* Render the map only when the user clicks the location icon and has location */}
      {mapVisible && currentLocation && (
        <div className="mt-4 w-full">
          <iframe
            src={`https://www.google.com/maps?q=${currentLocation.lat},${currentLocation.lng}&z=15&output=embed`}
            style={{
              width: "100%",
              height: "320px",
              border: "none",
            }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}

      {/* Show location permission error if any */}
      {locationError && <p className="text-red-500 text-sm mt-1">{locationError}</p>}
    </div>
  );
};

export default LocationSearchDropdown;
  