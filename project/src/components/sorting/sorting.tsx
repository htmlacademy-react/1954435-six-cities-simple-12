import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortOffer } from '../../store/actions';
import { SORTS } from '../../const';

export default function Sorting() {
  const [isOpen, setIsOpen] = useState(false);

  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="todo" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {sortType}
        {/* Не отображается стрелка, переделать*/}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="todoicon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isOpen ? 'places__options--opened' : ''
        }`}
      >
        {SORTS.map((sort) => {
          const isActive = sort === sortType;

          return (
            <li
              key={sort}
              className={`places__option ${
                isActive ? 'places__option--active' : ''
              } `}
              tabIndex={0}
              onClick={(evt) => {
                dispatch(sortOffer(sort));
              }}
            >
              {sort}
            </li>
          );
        })}
      </ul>
    </form>
  );
}
