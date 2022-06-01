import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const FriendDetails = () => {

    const {friendId} = useParams();

   const [friend, setFriend ] = useState({});

    useEffect (() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => setFriend(data))
    })

    const friendStyle = {
        border: '2px solid goldenrod',
        borderRadius: '10px',
        padding: '10px'
    }

    return (
        <div style={friendStyle}>
            <h3>Details for {friendId}</h3>
            <h2>I am {friend.name}</h2>
            <h4>contact me on {friend.phone}</h4>  
            <p>find me on {friend.website}</p>
            <h6>I am living {friend.address?.city}</h6>
            <Link to="/home"><button>Go Back Home</button></Link>
        </div>
    );
};

export default FriendDetails;