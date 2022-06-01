import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;

    const friendStyle = {
        border: '2px solid goldenrod',
        borderRadius: '10px',
        padding: '10px'
    }

    return (
        <div style={friendStyle}>
            <h2>I am {name}</h2>
            <h4>contact me on {phone}</h4>  
            <p>find me on {website}</p>
            <h6>I am living {address.city}</h6>  
             
            <Link to={`/friend/${id}`}><button>Visit Me</button></Link>
        </div>
    );
};

export default Friend;