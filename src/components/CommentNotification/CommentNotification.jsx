import { useMemo } from 'react';
import './CommentNotification.css';

function CommentNotification({notification, avatarUrl, fromNow}) {

    const actionText = useMemo(() => {
        return notification.imgName ? 'commented on your picture' : 'commented on you post';
    }, [notification]);

    const imgSrc = useMemo(() => {
        const url = require(`../../assets/images/${notification.imgName}`);
        return <img src={url} alt={notification.imgName}/>
    }, [notification])

    return (
        <div className="notification-container">
            <div className="notification-author-avatart">
                {<img src={avatarUrl} alt={notification.author}/>}
            </div>
            <div className="notification-content-block">
                <div className="notification-title-block">
                    <span className="notification-author-name">{notification.author}&nbsp;</span>
                    <span className="notification-action">{actionText}</span>
                </div>
                <div className="notification-date-block">
                    <span>{fromNow}</span>
                </div>
            </div>
            {
                notification.imgName &&
                <div className="notification-comment-picture">{imgSrc}</div>
            }
            
        </div>
    );
}

export default CommentNotification;