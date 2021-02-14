import React from 'react';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className="item" key={id}>
        {isOnline ? (
          <span className="status-online"></span>
        ) : (
          <span className="status-offline"></span>
        )}
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className="name">{name}</p>
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
