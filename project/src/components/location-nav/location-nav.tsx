import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/actions';
import { CITIES } from '../../const';

export default function LocationNav() {

  const currentCity = useAppSelector((state) => state.currentCity);
  const dispatch = useAppDispatch();


  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (

            <li key={city} className="locations__item">
              <a className={ cn ('locations__item-link','tabs__item',{'tabs__item--active':city === currentCity })} href='#todo'
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(changeCity(city));
                }}
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
