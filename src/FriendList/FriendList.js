import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
        <ul className={styles['friend-list']}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li key={id} className={styles.item}>
                    <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    />
                </li>
            ))}
        </ul>
    )
}

export default FriendList;