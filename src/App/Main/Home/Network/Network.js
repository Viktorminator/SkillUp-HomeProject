import React from 'react'

import './Network.css'

function Network({
    src,
    nameClass,
    alt
}) {
    return (
        <div className={nameClass}>
            <img src={src} alt={alt}/>
        </div>
    )
}

export default Network