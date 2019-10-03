import React from 'react'

import './NavItem.css'

function NavItem({
    nameLink
}) {
    return(
        <li>
            <a href="#">{nameLink}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </a>
        </li>
    )
}

export default NavItem