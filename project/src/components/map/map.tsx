import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import {City, Offers} from '../../types/offer';
import useMap from '../../hooks/useMap/useMap';

const defaultCustomIcon = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});


const currentCustomIcon = new Icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});


type MapProps = {
  city: City;
  points : Offers;
  selectedOffer: number | null;
};

export default function Map({city,points,selectedOffer}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon( selectedOffer !== null && point.id === selectedOffer ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, points,selectedOffer]);


  return (
    <section className="cities__map map" style={{height: '100%'}} ref={mapRef}>

    </section>
  );

}
