import { useState } from 'react';
import cn from 'classnames';
import { useAppDispatch} from '../../hooks';
import { SORTS } from '../../const';
import { changeSortType } from '../../store/app/app';

type SortingProps = {
  currentSortType: string;
}

export default function Sorting({ currentSortType }: SortingProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <form className="places__sorting" action="todo" method="get" data-testid="sort">
      <span className="places__sorting-caption">Sort by</span>{' '}
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentSortType}

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
              'places__option--active': sort === currentSortType,
            })}
            tabIndex={0}
            onClick={(evt) => {
              dispatch(changeSortType(sort));
              setIsOpen(!isOpen);
            }}
            data-testid="sort-item"
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}
