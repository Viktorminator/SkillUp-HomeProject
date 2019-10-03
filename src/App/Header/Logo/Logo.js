import React from 'react'
import logo from "./logo.jpg"

import './Logo.css'

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo"/>
            <p>SHAMAN<span>skyi</span></p>
        </div>
    )
}

export default Logo
