import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    const style = {
        margin:"10px"
    }
    return (
        <div>
            <h2>It's my home</h2>
            <div>
            <Link style={style} to="welcome"><button>welcome</button></Link>
            <Link style={style} to="getout"><button>get out</button></Link>
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default Home;