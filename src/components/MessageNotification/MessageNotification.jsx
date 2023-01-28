import './MessageNotification.css';

function MessageNotification({notification, avatarUrl, fromNow}) {
    
    return (
        <div className="message-notification-container">
            <div className="notification-author-avatart">
                {<img src={avatarUrl} alt={notification.author}/>}
            </div>
            <div className="notification-content-block">
                <div className="notification-title-block">
                    <span className="notification-author-name">{notification.author}&nbsp;</span>
                    <span className="notification-action">sent you a private message</span>
                </div>
                <div className="notification-date-block">
                    <span>{fromNow}</span>
                </div>
            </div>
            <div className="notification-message-block">
                {notification.text}
            </div>
        </div>        
    );
}

export default MessageNotification;