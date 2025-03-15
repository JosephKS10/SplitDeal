import { useState, useEffect } from "react";
import axios from "axios";
import ApiUrls from "../Api/ApiUrls";
import { Alert } from "./ui/alert";
import { AlertDescription } from "./ui/alert";
import { AlertTitle } from "./ui/alert";

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
  const [mapVisible, setMapVisible] = useState<boolean>(false); // Control map display

  // Alert states for showing the current address
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  // Function to fetch reverse geocoded address using ORS API
  const fetchAddress = async (lat: number, lng: number): Promise<string> => {
    try {
      const response = await axios.get("https://api.openrouteservice.org/geocode/reverse", {
        params: {
          api_key: ORS_API_KEY,
          "point.lat": lat,
          "point.lon": lng,
          size: 1, // Only one result
        },
      });
      if (response.data.features && response.data.features.length > 0) {
        return response.data.features[0].properties.label;
      } else {
        return `Lat: ${lat}, Lng: ${lng}`;
      }
    } catch (err) {
      console.error("Error fetching address:", err);
      return `Lat: ${lat}, Lng: ${lng}`;
    }
  };

  // Set selected location in the backend
  const setLocation = async (location: Location) => {
    const yourToken = localStorage.getItem("userToken");
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

  // Debounced search function to fetch locations by query
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

  // Debounce query changes to avoid excessive API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLocations(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  // Request geolocation permission when user clicks the button
  const requestLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setCurrentLocation({ lat, lng });
          setMapVisible(true);
          // Get the address via reverse geocoding
          const address = await fetchAddress(lat, lng);
          setAlertMessage(address);
          setShowAlert(true);
        },
        (error) => {
          console.error("Error getting current location:", error);
          setError("Permission denied or error retrieving location.");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setError("Geolocation is not supported by this browser.");
    }
  };

  // Automatically hide the alert after 5 seconds
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  // Handle location selection from the search dropdown
  const handleSelectLocation = (location: Location) => {
    setQuery(location.properties.label);
    setLocations([]);
    onSelect(location);
    setLocation(location);
  };

  return (
    <div className="relative flex flex-col items-center gap-2">
      <div className="w-96 flex items-center gap-2">
        <label htmlFor="location-search" className="sr-only">
          Search location
        </label>
        <input
          id="location-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search location..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {/* Permission Button beside input */}
        <button
          onClick={requestLocationPermission}
          className="p-3 cursor-pointer inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-500 hover:bg-orange-600 text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </button>
      </div>

      {/* Alert displaying the current location's address */}
      {showAlert && currentLocation && (
        <Alert>
          <AlertTitle>Current Location</AlertTitle>
          <AlertDescription>{alertMessage}</AlertDescription>
        </Alert>
      )}

      {loading && <p className="text-gray-500 text-sm mt-1">Loading...</p>}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

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

      {/* Only display map when permission is granted */}
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
