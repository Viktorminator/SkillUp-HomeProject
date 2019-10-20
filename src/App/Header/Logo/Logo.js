import React from 'react'
import logo from "./logo.jpg"

import './Logo.css'

const Logo = () => {
    return (
        <a className="logo" href = ''>
            <img src={logo} alt="logo"/>
            <p>SHAMAN<span>skyi</span></p>
        </a>
    )
}

export default Logo
