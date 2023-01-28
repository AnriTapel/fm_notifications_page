function PostReactionNotification({notification, avatarUrl, fromNow}) {

    return (
        <div className="notification-container">
            <div className="notification-author-avatart">
                {<img src={avatarUrl} alt={notification.author}/>}
            </div>
            <div className="notification-content-block">
                <div className="notification-title-block">
                    <span className="notification-author-name">{notification.author}&nbsp;</span>
                    <span className="notification-action">reacted on your recent post&nbsp;</span>
                    <span className="notification-post-title">{notification.postTitle}</span>
                </div>
                <div className="notification-date-block">
                    <span>{fromNow}</span>
                </div>
            </div>
        </div>
    );
}

export default PostReactionNotification;