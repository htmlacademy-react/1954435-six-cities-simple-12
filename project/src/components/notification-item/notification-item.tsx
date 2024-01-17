import { toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';
import { clearNotification } from '../../store/notifications/notifications';
import { getNotifications } from '../../store/notifications/selectors';
import { Notification } from '../../types/notification';

export default function NotificationItem(): JSX.Element {
  const notifications = useAppSelector(getNotifications);
  const dispatch = useAppDispatch();

  const renderNotification = () => {
    notifications.forEach((notification: Notification) => {
      const toastOptions = {
        autoClose: notification.duration,
        toastId: notification.id,
        onClose: () => dispatch(clearNotification(notification.id))
      };

      if (toast.isActive(notification.id)) {
        return;
      }

      switch (notification.type) {
        case 'error':
          toast.error(notification.message, toastOptions);
          break;
        case 'success':
          toast.success(notification.message, toastOptions);
          break;
        case 'info':
          toast.info(notification.message, toastOptions);
          break;
        case 'warning':
          toast.warning(notification.message, toastOptions);
          break;
        default:
          return null;
      }
    });
  };

  return (
    <>
      {renderNotification()}
    </>
  );
}


