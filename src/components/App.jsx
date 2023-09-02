import { Profile } from './profile/profile';
import user from '../data/user.json';
import { Statistics } from './statistics/statistics';
import data from '../data/data.json';
import { FriendList } from './friends/friendList';
import friends from '../data/friends.json';
import { TransactionsHistory } from './transactions/transactions';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionsHistory items={transactions}></TransactionsHistory>
    </>
  );
};
