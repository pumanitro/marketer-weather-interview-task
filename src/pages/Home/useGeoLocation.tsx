import { useState, useEffect } from 'react';

type Location = {
  lat: number;
  lng: number;
};

export type GeoLocation = Location | null;

export const useGeoLocation = () => {
  const [geoLocation, setGeoLocation] = useState<GeoLocation>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          setGeoLocation({
            lat,
            lng,
          });
          setIsLoading(false);
        },
        () => setIsLoading(false)
      );
    } else {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, geoLocation] as [boolean, GeoLocation];
};
