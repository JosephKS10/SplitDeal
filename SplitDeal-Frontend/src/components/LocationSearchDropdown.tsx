import { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";

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

  // Debounced search function
  const fetchLocations = async (searchText: string) => {
    if (!searchText) {
      setLocations([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`https://api.openrouteservice.org/geocode/search`, {
        params: {
          api_key: ORS_API_KEY,
          text: searchText,
          size: 5, // Limit results
          "boundary.country": "AU", // Restrict to Australia
          "boundary.city": "Melbourne", // Restrict to Melbourne
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

  // Handle user input change with debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLocations(query);
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [query]);

  // Handle selection of a location
  const handleSelectLocation = (location: Location) => {
    setQuery(location.properties.label); // Show selected location in input
    setLocations([]); // Hide dropdown
    onSelect(location); // Pass location data to parent component
  };

  return (
    <div className="relative w-80">
      <label htmlFor="location-search" className="sr-only">Search location</label>
      <input
        id="location-search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search location..."
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      {loading && <p className="text-gray-500 text-sm mt-1">Loading...</p>}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {locations.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10">
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
    </div>
  );
};

export default LocationSearchDropdown;
