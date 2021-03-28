import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from './user.json';
import statisticsData from './statistical-data.json';
import friends from './friends.json';
import transaction from './transactionHistory.json';



const App = () => {
    return (
        <React.Fragment>  
            <Profile
                user={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics
                title="Upload stats"
                data={statisticsData}
            />
            <FriendList
                friends={friends}
            />

            <TransactionHistory
                transaction={transaction}
            />

        </React.Fragment>)
    
}

export default App;