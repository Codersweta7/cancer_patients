import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from '@react-google-maps/api';

const libraries: ("places")[] = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const Map: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [places, setPlaces] = useState<any[]>([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const loc = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCurrentPosition(loc);
      fetchNearbyHospitals(loc);
    });
  }, []);

  const fetchNearbyHospitals = (location: { lat: number; lng: number }) => {
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));
    const request = {
      location,
      radius: 10000, // 10 km
      type: ['hospital'],
      keyword: 'cancer',
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        setPlaces(results);
      }
    });
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Nearby Cancer Hospitals</h2>
      {currentPosition && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={currentPosition}
          zoom={13}
        >
          <Marker position={currentPosition} label="You" />
          {places.map((place, idx) => (
            <Marker
              key={idx}
              position={{
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
              }}
              title={place.name}
            />
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
