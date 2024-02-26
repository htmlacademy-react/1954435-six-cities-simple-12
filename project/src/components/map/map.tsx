import { Icon, LayerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import cn from 'classnames';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap/useMap';
import { Offer } from '../../types/offer';


const defaultCustomIcon = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

type MapProps = {
  className: string;
  offers: Offer[];
  activePointId: number | null;
};

export default function Map({ className, offers, activePointId }: MapProps) {
  const city = offers[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const layer = new LayerGroup();

      offers.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            activePointId !== null && point.id === activePointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(layer);

      });

      layer.addTo(map);

      return () => {
        map.removeLayer(layer);
      };
    }
  }, [map, offers, activePointId]);

  useEffect(() => {
    if (map) {
      map.setView(
        {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        city.location.zoom
      );
    }
  }, [map, city]);

  return (
    <section
      className={cn('map', className)}
      style={{ minHeight: '100%' }}
      ref={mapRef}
      data-testid="map"
    />
  );
}
