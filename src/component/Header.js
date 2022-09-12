import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import trollface from '../img/troll-face.png'
import '../App.css'
const Header = () => {
    return (
        <nav className=" header">
            <img className='header--img' src={trollface} alt="trollfacec"/>
            <h2 className='header--title'>Header component</h2>
            <h4 className='header--project'>React Course - projects 3</h4>
        </nav>
    );
};

export default Header;