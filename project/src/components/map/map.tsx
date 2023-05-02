import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import {City, Location} from '../../types/offer';
import useMap from '../../hooks/useMap/useMap';

const defaultCustomIcon = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

/*
Активная иконка маркера на будущее
const currentCustomIcon = new Icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});*/


type MapProps = {
  city: City;
  points : Location[];
};

export default function Map({city,points}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon( defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, points]);


  return (
    <section className="cities__map map" style={{height: '100%'}} ref={mapRef}>

    </section>
  );

}
