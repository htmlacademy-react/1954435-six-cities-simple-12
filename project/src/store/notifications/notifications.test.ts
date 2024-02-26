import {
  NotificationsDataState,
  notificationsData,
  pushNotification,
  clearNotification,
} from './notifications';
import { makeFakeNotification } from '../../utils/mocks';

const notification = makeFakeNotification();

describe('Reducer: notificationsData', () => {
  let state: NotificationsDataState;

  beforeEach(() => {
    state = {
      notifications: []
    };
  });

  it('Should return initial state without additional parameters', () => {
    expect(notificationsData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual(state);
  });

  it('pushNotification test', () => {
    expect(notificationsData.reducer(state, pushNotification(notification)))
      .toEqual({
        notifications: [notification]
      });
  });

  it('clearNotification test', () => {
    expect(notificationsData.reducer(state, clearNotification(notification.id)))
      .toEqual(state);
  });
});
