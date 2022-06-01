import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const style = {
        margin:"10px"
    }
    return (
        <nav  style={style}>

            <Link style={style} to="/home"><button>Home</button></Link>
            <Link style={style} to="/friends"><button>Friends</button></Link>
            <Link style={style} to="/about"><button>About</button></Link>

        </nav>
    );
};

export default Header;