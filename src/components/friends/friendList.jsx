import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import { FriendsList } from './friendListItem.style';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          key={id}
        ></FriendListItem>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
