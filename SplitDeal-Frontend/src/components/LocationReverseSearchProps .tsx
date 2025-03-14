import { useState, ChangeEvent } from "react";
import axios from "axios";

const ORS_API_KEY = "5b3ce3597851110001cf62488d8c0611747a4fd18528e23d079d839b"; // Replace with your OpenRouteService API key

interface Location {
  properties: {
    label: string;
  };
}

interface LocationReverseSearchProps {
  onSelect: (location: Location) => void;
}

const LocationReverseSearch: React.FC<LocationReverseSearchProps> = ({ onSelect }) => {
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Fetch location using reverse geocoding API
  const fetchLocationFromCoordinates = async () => {
    if (!latitude || !longitude) {
      setLocation(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
        console.log(longitude);
        console.log(latitude);

       const response = await axios.get('https://api.openrouteservice.org/geocode/reverse', {
        params: {
          api_key: ORS_API_KEY,
          'point.lon': longitude,
          'point.lat': latitude,
        },
      });
      console.log(response.data.features[0]);
      setLocation(response.data.features[0]); // Set first feature as location
    } catch (error) {
      setError("Error fetching location. Please try again.");
      console.error("Error fetching location:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle latitude and longitude input changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, type: "lat" | "lon") => {
    if (type === "lat") {
      setLatitude(event.target.value);
    } else {
      setLongitude(event.target.value);
    }
  };

  // Handle the location selection (if available)
  const handleSelectLocation = () => {
    if (location) {
      onSelect(location); // Pass location data to parent component
    }
  };

  return (
    <div className="relative w-80">
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={latitude}
          onChange={(e) => handleInputChange(e, "lat")}
          placeholder="Latitude"
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="text"
          value={longitude}
          onChange={(e) => handleInputChange(e, "lon")}
          placeholder="Longitude"
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <button
        onClick={fetchLocationFromCoordinates}
        className="w-full p-2 bg-blue-500 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
      >
        Search Location
      </button>

      {loading && <p className="text-gray-500 text-sm mt-1">Loading...</p>}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      {location && (
        <div className="mt-4">
          <h3 className="font-semibold">Location Details:</h3>
          <p>{location.properties.label}</p>
          <button
            onClick={handleSelectLocation}
            className="mt-2 p-2 bg-green-500 text-white rounded-lg"
          >
            Select Location
          </button>
        </div>
      )}
    </div>
  );
};

export default LocationReverseSearch;
