import PropTypes from 'prop-types';
import { FriendsListItem, Status } from './friendListItem.style';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListItem className="item">
      <Status $isOnline={isOnline}>{isOnline}</Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
