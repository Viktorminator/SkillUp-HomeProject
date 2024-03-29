import React from 'react';
import Logo from './Logo/Logo'
import Nav from './Navigation/Nav'

import './Header.css'

function Header() {
    return (
        <header className="main-header">
           <Logo/>
           <Nav/> 
        </header>
    )
}

export default Header;