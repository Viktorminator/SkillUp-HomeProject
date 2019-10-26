import React from 'react'
import {Link} from 'react-scroll'

import './NavItem.css'

function NavItem({
    nameLink,
    activeClass,
    to,
    spy,
    smooth,
    offset,
    duration
}) {
    return(
        <Link
            activeClass = {activeClass}
            to = {to}
            spy = {spy}
            smooth = {smooth}
            offset = {offset}
            duration = {duration}
        >
            <li>
                {nameLink}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </li>
        </Link>
    )
}

export default NavItem