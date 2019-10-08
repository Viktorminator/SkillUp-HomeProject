import React from 'react'

import './SubHeader.css'

function SubHeader({
    nameClass,
    title
}) {
    return (
        <header className= {nameClass}>
            <p>{title}</p>
        </header>
    )
}

export default SubHeader