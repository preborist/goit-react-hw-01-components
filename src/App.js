import React from 'react';
import user from './components/user.json';
import Profile from './components/Profile';
import statisticalData from './components/statistical-data.json';
import Statistics from './components/Statistics';
import friends from './components/friends.json';
import FriendList from './components/FriendList';
import transactions from './components/transactions.json';
import TransactionHistory from './components/TransactionHistory';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
