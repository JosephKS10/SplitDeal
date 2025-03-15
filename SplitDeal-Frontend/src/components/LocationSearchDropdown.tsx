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
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // Handle location selection
  const handleSelectLocation = (location: Location) => {
    setQuery(location.properties.label);
    setLocations([]);
    onSelect(location);
    setLocation(location);
  };

  // Handle location icon click to toggle map visibility
  const handleLocationIconClick = () => {
    setMapVisible(!mapVisible);
  };

  return (
    <div className="relative flex flex-col items-center gap-2">
      <div className="w-96 flex items-center gap-2">
        <label htmlFor="location-search" className="sr-only">Search location</label>
        <input
          id="location-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search location..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <div>
          <a
            className="size-13 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-700 focus:outline-hidden focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
            onClick={handleLocationIconClick} // Toggle map visibility on click
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </a>
        </div>
        <div>
          {loading && <p className="text-gray-500 text-sm mt-1">Loading...</p>}
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>

      {locations.length > 0 && (
        <ul
          className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10"
          style={{ top: "93%" }}
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

      {/* Render the map only when the user clicks the location icon */}
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
    </div>
  );
};

export default LocationSearchDropdown;
