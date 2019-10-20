import React from 'react'

import './SubHeader.css'

function SubHeader({
    className,
    title,
    id = ''
}) {
    return (
        <header className= {className} id={id}>
            <p>{title}</p>
        </header>
    )
}

export default SubHeader