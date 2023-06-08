import { Icon, LayerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import cn from 'classnames';
import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import useMap from '../../hooks/useMap/useMap';

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
};

export default function Map({ className }: MapProps) {
  const selectedOfferId = useAppSelector((state) => state.selectedOfferId);
  const offers = useAppSelector((state) => state.offers);
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
            selectedOfferId !== null && point.id === selectedOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(layer);
        layer.addTo(map);

      });

      return () => { map.removeLayer( layer);};
    }
  }, [map,offers, selectedOfferId]);

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
  }, [map, city,]);


  return (
    <section
      className={cn('map', className)}
      style={{ minHeight: '100%' }}
      ref={mapRef}
    />
  );
}
