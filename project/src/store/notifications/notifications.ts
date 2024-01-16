import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Notification } from '../../types/notification';

export type NotificationsDataState = {
  notifications: Notification[];
}

const initialState: NotificationsDataState = {
  notifications: []
};

export const notificationsData = createSlice({
  name: NameSpace.Notification,
  initialState,
  reducers: {
    pushNotification: (state, action: PayloadAction<Omit<Notification, 'id'>>) => {
      const id = nanoid();

      state.notifications.push({ id, ...action.payload });
    },
    clearNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter((item) => item.id !== action.payload);
    }
  }
});

export const { pushNotification, clearNotification } = notificationsData.actions;
