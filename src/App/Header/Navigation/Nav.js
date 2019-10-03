import React from 'react'
import NavItem from './NavItem'

import './Nav.css'

function Nav(){
    return(
        <nav>
            <ul>
                <NavItem
                    nameLink='Home'
                />
                <NavItem
                    nameLink='About'
                />
                <NavItem
                    nameLink='Projects'
                />
                <NavItem
                    nameLink='Blog'
                />
                <NavItem
                    nameLink='Contact'
                />
                <NavItem
                    nameLink='Copyrights'
                />
            </ul>
        </nav>
    )
}

export default Nav