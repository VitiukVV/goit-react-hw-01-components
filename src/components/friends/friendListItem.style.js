import { styled } from 'styled-components';

export const FriendsList = styled.ul`
  margin: 30px auto;
  padding: 0;
  width: 200px;
`;

export const FriendsListItem = styled.li`
  align-items: center;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  gap: 15px;
  justify-content: start;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Status = styled('span')(({ $isOnline }) => {
  return {
    border: '1px solid #000',
    borderRadius: '50%',
    height: '20px',
    width: '20px',
    backgroundColor: $isOnline ? 'green' : 'red',
  };
});

export const Text = styled.p``;
