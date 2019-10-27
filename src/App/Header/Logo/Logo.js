import React from 'react'
import logo from "./logo.jpg"
import {NavLink} from 'react-router-dom'

import './Logo.css'

const Logo = () => {
    return (
        <NavLink className="logo" to='/'>
            <img src={logo} alt="logo"/>
            <p>SHAMAN<span>skyi</span></p>
        </NavLink>
    )
}

export default Logo
