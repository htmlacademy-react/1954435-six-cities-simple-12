import { CITIES, SORTS } from '../../const';
import { AppState, appData, changeCity, changeSortType } from './app';

describe('Reducer:  appData', () => {
  let state: AppState;

  beforeEach(() => {
    state = {
      currentCity: CITIES[0],
      sortType: SORTS[0],
    };
  });
  it('Should return initial state without additional parameters', () => {
    expect(appData.reducer(undefined,{ type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });
  it('Should change current city by a given city', () => {
    expect(appData.reducer(state, changeCity(CITIES[3])))
      .toEqual({...state, currentCity:CITIES[3]});
  });
  it('Should change current sort type by a given sort type', () => {
    expect(appData.reducer(state, changeSortType(SORTS[3])))
      .toEqual({...state, sortType:SORTS[3]});
  });
});

