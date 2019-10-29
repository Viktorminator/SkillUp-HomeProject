import React from 'react'

import './Network.css'

function Network({
    src,
    nameClass,
    alt,
    href
}) {
    return (
        <a href={href} className={nameClass} target='_blank'>
            <img src={src} alt={alt}/>
        </a>
    )
}

export default Network