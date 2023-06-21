import { useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortType } from '../../store/actions';
import { SORTS } from '../../const';

export default function Sorting() {
  const [isOpen, setIsOpen] = useState(false);

  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="todo" method="get">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {sortType}

        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={cn('places__options', 'places__options--custom', {
          'places__options--opened': isOpen,
        })}
      >
        {SORTS.map((sort) => (
          <li
            key={sort}
            className={cn('places__option', {
              'places__option--active': sort === sortType,
            })}
            tabIndex={0}
            onClick={(evt) => {
              dispatch(changeSortType(sort));
              setIsOpen(!isOpen);
            }}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}
