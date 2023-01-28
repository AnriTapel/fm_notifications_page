import './CommentNotification.css';

function CommentNotification({notification, avatarUrl, fromNow}) {

    const getActionText = () => {
        if (notification.imgName) {
            return 'commented on your picture';
        }
        else {
            return 'commented on you post';
        }
    }

    const getImgSrc = () => {
        const url = require(`../../assets/images/${notification.imgName}`);
        return <img src={url} alt={notification.imgName}/>
    }

    return (
        <div className="notification-container">
            <div className="notification-author-avatart">
                {<img src={avatarUrl} alt={notification.author}/>}
            </div>
            <div className="notification-content-block">
                <div className="notification-title-block">
                    <span className="notification-author-name">{notification.author}&nbsp;</span>
                    <span className="notification-action">{getActionText()}</span>
                </div>
                <div className="notification-date-block">
                    <span>{fromNow}</span>
                </div>
            </div>
            {
                notification.imgName &&
                <div className="notification-comment-picture">
                    {getImgSrc()}
                </div>
            }
            
        </div>
    );
}

export default CommentNotification;