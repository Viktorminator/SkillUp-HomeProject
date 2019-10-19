import React from 'react'

import './SubHeader.css'

function SubHeader({
    className,
    title
}) {
    return (
        <header className= {className}>
            <p>{title}</p>
        </header>
    )
}

export default SubHeader