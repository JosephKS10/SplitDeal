// @ts-nocheck
import { useState } from 'react'
import LocationSearchDropdown from '../components/LocationSearchDropdown';
import LocationReverseSearch from '../components/LocationReverseSearchProps ';


interface Location {
  properties: {
    id: string;
    label: string;
  };
  geometry: {
    coordinates: [number, number];
  };
}

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <>
      <div>Home</div>
      <LocationReverseSearch onSelect={(location) => setSelectedLocation(location)} />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
        <h2 className="text-xl font-semibold mb-4">Search and Select a Location</h2>
        <LocationSearchDropdown onSelect={(location) => setSelectedLocation(location)} />

        {selectedLocation && (
          <div className="mt-4 p-4 bg-white shadow-lg rounded-lg w-80">
            <h3 className="text-lg font-medium text-gray-700">Selected Location:</h3>
            <p className="text-gray-600"><strong>Name:</strong> {selectedLocation.properties.label}</p>
            <p className="text-gray-600">
              <strong>Coordinates:</strong> {selectedLocation.geometry.coordinates.join(", ")}
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default Home;
