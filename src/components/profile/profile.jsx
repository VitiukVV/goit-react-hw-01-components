import PropTypes from 'prop-types';
import {
  Avatar,
  Description,
  List,
  ListItem,
  SpanTextSecond,
  Text,
  TextUserName,
  Wraper,
} from './profile.style';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Wraper>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <TextUserName>{username}</TextUserName>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <List>
        <ListItem>
          <span>Followers</span>
          <SpanTextSecond>{followers}</SpanTextSecond>
        </ListItem>
        <ListItem>
          <span>Views</span>
          <SpanTextSecond>{views}</SpanTextSecond>
        </ListItem>
        <ListItem>
          <span>Likes</span>
          <SpanTextSecond>{likes}</SpanTextSecond>
        </ListItem>
      </List>
    </Wraper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
