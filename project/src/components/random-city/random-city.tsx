import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/app/app';
import { CITIES } from '../../const';
import { AppRoute } from '../../const';

function getRandomArrayElement<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
/*const getRandomCity = (arr: typeof CITIES ): typeof CITIES[0] => {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
};*/

export default function RandomCity() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //const randomCity = getRandomCity(CITIES);
  const randomCity = getRandomArrayElement(CITIES);

  const handleLocationClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    dispatch(changeCity(randomCity));
    navigate(AppRoute.Main);
  };

  return (
    <section className="locations locations--login locations--current" data-testid="random-city">
      <div className="locations__item">
        <a
          className="locations__item-link"
          href="#todo"
          onClick={handleLocationClick}
          data-testid="redirect-main"
        >
          <span>{randomCity}</span>
        </a>
      </div>
    </section>
  );
}
