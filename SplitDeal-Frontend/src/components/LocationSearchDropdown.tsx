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

  // Function to set the selected location in the backend
  const setLocation = async (location: Location) => {
    const yourToken = localStorage.getItem('userToken');
    const tokenWithoutQuotes = yourToken?.replace(/^"|"$/g, "");
    console.log(tokenWithoutQuotes);
    console.log(location.properties.label)
    if (yourToken) {
      try {
        const response = await axios.put(
          ApiUrls.locationSet,
          { location: location.properties.label },
          {
            headers: {
              Authorization: `Bearer ${tokenWithoutQuotes}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Location updated successfully:', response.data.msg);
      } catch (error) {
        console.error('Error updating location:', error);
        setError('Error updating the location. Please try again.');
      }
    } else {
      console.error('No authentication token found.');
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
    setLocation(location); // Set the selected location in the backend
  };

  return (
    <div className="relative flex justify-center gap-2">
      <div className="w-100">
        <label htmlFor="location-search" className="sr-only">Search location</label>
        <input
          id="location-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search location..."
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <div>

          {loading && <p className="text-gray-500 text-sm mt-1">Loading...</p>}
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
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
      <a className="size-11 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-700 focus:outline-hidden focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      </a>
    </div>
  );
};

export default LocationSearchDropdown;
