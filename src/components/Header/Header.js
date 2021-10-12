import React from 'react';
import "assets/styles/Header.css";

const Header = ({ title, imageUrl }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header >
    )
}

export default Header
