import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.scss';

const FriendList = ({ friends }) => (
  <ul className={styles.friend__list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styles.item} key={id}>
        {isOnline ? (
          <span className={styles.online}></span>
        ) : (
          <span className={styles.offline}></span>
        )}
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
