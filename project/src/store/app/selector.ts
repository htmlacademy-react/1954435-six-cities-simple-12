import { NameSpace, CITIES, SORTS } from '../../const';
import { State } from '../../types/state';

export const getCurrentCity = (state: State):typeof CITIES[0] => state[NameSpace.App].currentCity;
export const getCurrentSortType = (state: State):typeof SORTS[0] => state[NameSpace.App].sortType;

