import { Icon, Marker } from 'leaflet';
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
  //Создаёт контейнер для хранения значений маркеров
  /*const markersRef = useRef<Marker[]>([]);*/

  useEffect(() => {
    if (map) {
      map.setView(
        {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        city.location.zoom
      );

      //Удаляет/очищает все маркеры с карты
      /*markersRef.current.forEach((markerItem) => markerItem.remove());*/

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
          .addTo(map);
        //Добавляет/обновляет текущие маркеры по выбранному городу
        /*markersRef.current.push(marker);*/

      });
    }
  }, [map, city, offers, selectedOfferId]);

  return (
    <section
      className={cn('map', className)}
      style={{ minHeight: '100%' }}
      ref={mapRef}
    />
  );
}
