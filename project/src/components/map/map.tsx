import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import cn from 'classnames';
import { useRef, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
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
  isMainMap?: boolean;
};

export default function Map({ city,points,isMainMap}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const selectedOfferId = useAppSelector((state) => state.selectedOfferId);

  useEffect(() => {

    if (map) {

      map.setView(
        {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        city.location.zoom

      );


      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon( selectedOfferId !== null && point.id === selectedOfferId ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map,city, points, selectedOfferId]);


  return (
    <section className={cn('map', {
      'cities__map': isMainMap,
      'property__map': !isMainMap
    })} style={{minHeight: '100%'}} ref={mapRef}
    >

    </section>
  );

}
