import React from 'react'
import NavItem from './NavItem'

import './Nav.css'

function Nav(){
    return(
        <nav>
            <ul>
                <NavItem
                    nameLink='Home'
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                />
                <NavItem
                    nameLink='About'
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                />
                <NavItem
                    nameLink='Projects'
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                />
                <NavItem
                    nameLink='Blog'
                    activeClass="active"
                    to="Blog"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                />
                <NavItem
                    nameLink='Contact'
                    activeClass="active"
                    to="Contacts"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                />
                <NavItem
                    nameLink='Copyrights'
                    activeClass="active"
                    to="Footer"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                />
            </ul>
        </nav>
    )
}

export default Nav