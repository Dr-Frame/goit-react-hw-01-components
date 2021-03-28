import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ user, tag, location, avatar, stats: { followers, views, likes } }) => {
return (
    <div className={styles.profile}>
    <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.name}>{user}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles["stats__item"]}>
          <span>Followers</span>
        <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles["stats__item"]}>
          <span>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles["stats__item"]}>
          <span>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.defaultProps = {
  avatar: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
}

Profile.propTypes = {
  user: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,


  /* followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired, */
}

export default Profile;