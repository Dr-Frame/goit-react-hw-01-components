import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <div className={styles.description}>
        <span className={styles[isOnline]}></span>
        <img className="avatar" src={avatar} alt={name} width={48} />
        <p className={styles.name}>{name}</p>
        </div>
    )
}
FriendListItem.defaultProps = {
    avatar: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
}
FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;