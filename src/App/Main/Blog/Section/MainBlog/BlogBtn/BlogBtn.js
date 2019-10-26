import React from 'react'

import './BlogBtn.css'

function BlogBtn({
    changeHeight
}) {
    return(
        <div className='blog-button' onClick = {()=>{changeHeight()}}>
            <div>
                Show ALL 
            </div>
        </div>
    )
}

export default BlogBtn