import React, { useMemo, useState, useCallback } from 'react';
import { NOTIFICATIONS_DATA } from './model/notificationsData';
import BaseNotification from './components/BaseNotification/BaseNotification';
import './App.css';

function App() {

  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);

  const markAllAsRead = () => {
    setNotifications(notifications.map(
      it => {
        it.isRead = true;
        return it;
      })
    );
  };

  const getUnreadNotificationsCount = useMemo(() => {
    return notifications.filter(it => !it.isRead).length;
  }, [notifications]);

  const notificationClickHandler = useCallback((notification) => {
    const index = notifications.findIndex(it => it.id === notification.id);
    if (index < 0) {
      return;
    }
    let clickedNotification = notifications[index];
    clickedNotification.isRead = true;
    setNotifications([
      ...notifications.slice(0, index),
      clickedNotification,
      ...notifications.slice(index + 1)]);
  }, [notifications]);

  return (
    <div className="page-container">
      <header>
        <div>
          <h1>Notifications</h1>
          <div className="unread-notifications-counter">{getUnreadNotificationsCount}</div>
        </div>
        <button onClick={markAllAsRead}>Mark all as read</button>
      </header>
      <main>
        {
          notifications && notifications.map(it => 
            <BaseNotification notification={it} key={it.id} clickHandler={notificationClickHandler}/>
          )
        }
      </main>
    </div>
  );
}

export default App;