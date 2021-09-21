import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div>
            <nav>
                <ul className='menu'>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contct</a></li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;
