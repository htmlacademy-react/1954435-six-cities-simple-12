import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './state';

export type ThunkOptions = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};
