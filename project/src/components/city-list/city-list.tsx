import cn from 'classnames';
import { useAppDispatch } from '../../hooks';
import { CITIES } from '../../const';
import { changeCity } from '../../store/app/app';

type LocationNavProps = {
  currentCity?: string;
}

export default function CityList({currentCity}:LocationNavProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="tabs" data-testid="city-list">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city} className="locations__item">
              <a
                className={cn('locations__item-link', 'tabs__item', {
                  'tabs__item--active': city === currentCity,
                })}
                href="#todo"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(changeCity(city));
                }}
                data-testid="city-item"
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
