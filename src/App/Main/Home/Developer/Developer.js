import React from 'react'

import './Developer.css'

function Developer({
    developer,
    profession
}) {
    return(
        <div className="developer">
            <div className="introduce"> 
                <p>{developer}</p>
            </div>
            <div className="profession"> 
                <p>{profession}</p>
            </div>
        </div>
    )
}

export default Developer