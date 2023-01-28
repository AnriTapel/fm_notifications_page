import './BaseNotification.css';
import PostReactionNotification from '../PostReactionNotification/PostReactionNotification';
import FollowerNotification from '../FollowerNotification/FollowerNotification';
import GroupNotification from '../GroupNotification/GroupNotification';
import MessageNotification from '../MessageNotification/MessageNotification';
import CommentNotification from '../CommentNotification/CommentNotification';
import { useEffect, useState } from 'react';

const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');


function BaseNotification({notification, clickHandler}) {

    const [avatarUrl, setAvatarUrl] = useState();
    const [fromNow, setFromNow] = useState();

    useEffect(() => {
        const url = require(`../../assets/images/${notification.avatarName}`);
        setAvatarUrl(url);
        dayjs.extend(relativeTime);
        setFromNow(dayjs(notification.timestamp * 1000).fromNow());
    }, [notification.avatarName, notification.timestamp]);

    return(
        <>
            {
                {
                    'post_reaction': <div className={`base-notification-wrapper ${!notification.isRead ? 'base-notification-wrapper-unread' : ''}`} onClick={() => {clickHandler(notification)}}>
                            <PostReactionNotification notification={notification} avatarUrl={avatarUrl} fromNow={fromNow}/>
                        </div>,
                    'follower': <div className={`base-notification-wrapper ${!notification.isRead ? 'base-notification-wrapper-unread' : ''}`} onClick={() => {clickHandler(notification)}}>
                            <FollowerNotification notification={notification} avatarUrl={avatarUrl} fromNow={fromNow}/>
                        </div>,
                    'group_join': <div className={`base-notification-wrapper ${!notification.isRead ? 'base-notification-wrapper-unread' : ''}`} onClick={() => {clickHandler(notification)}}>
                            <GroupNotification notification={notification} avatarUrl={avatarUrl} fromNow={fromNow}/>
                        </div>,
                    'group_leave': <div className={`base-notification-wrapper ${!notification.isRead ? 'base-notification-wrapper-unread' : ''}`} onClick={() => {clickHandler(notification)}}>
                            <GroupNotification notification={notification} avatarUrl={avatarUrl} fromNow={fromNow}/>
                        </div>,
                    'message': <div className={`base-notification-wrapper ${!notification.isRead ? 'base-notification-wrapper-unread' : ''}`} onClick={() => {clickHandler(notification)}}>
                            <MessageNotification notification={notification} avatarUrl={avatarUrl} fromNow={fromNow}/>
                        </div>,
                    'comment': <div className={`base-notification-wrapper ${!notification.isRead ? 'base-notification-wrapper-unread' : ''}`} onClick={() => {clickHandler(notification)}}>
                            <CommentNotification notification={notification} avatarUrl={avatarUrl} fromNow={fromNow}/>
                        </div>
                }[notification.type]
            }
        </>
    )
}

export default BaseNotification;