import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {

    const [friends, setFriends] = useState ([]);

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (response => response.json())
        .then (data => setFriends(data))
    }, [])
    
    const friendCompStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap : '10px'
        
    }

    return (
        <div>
            <h1>I have {friends.length} friends</h1>
             <div style={friendCompStyle}>
                 {
                     friends.map((friend) => <Friend key={friend.id} friend={friend}></Friend>)
                 }
             </div>
        </div>
    );
};

export default Friends;