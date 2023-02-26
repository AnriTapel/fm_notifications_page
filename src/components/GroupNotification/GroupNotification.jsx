import { useMemo } from "react";

function GroupNotification({notification, avatarUrl, fromNow}) {

    const joinActionText = <span className="notification-action">has joined your group&nbsp;</span>
    const leaveActionText = <span className="notification-action">left the group&nbsp;</span>
    
    const actionText = useMemo(() => {
        switch(notification.type) {
            case 'group_join':
                return joinActionText;
            case 'group_leave':
                return leaveActionText;
            default:
                return <span>&nbsp;</span>    
        }
    }, [notification.type])

    return (
        <div className="notification-container">
            <div className="notification-author-avatart">
                {<img src={avatarUrl} alt={notification.author}/>}
            </div>
            <div className="notification-content-block">
                <div className="notification-title-block">
                    <span className="notification-author-name">{notification.author}&nbsp;</span>
                    {actionText}
                    <span className="notification-group-name">{notification.groupName}</span>
                </div>
                <div className="notification-date-block">
                    <span>{fromNow}</span>
                </div>
            </div>
        </div>
    );
}

export default GroupNotification;