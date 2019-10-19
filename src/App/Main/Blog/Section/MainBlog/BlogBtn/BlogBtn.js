import React from 'react'

import './BlogBtn.css'

function BlogBtn({
    changeHeight
}) {
    return(
        <div className='blog-button'>
            <div 
                onClick = {()=>{changeHeight()}}
            >
                Show ALL 
            </div>
        </div>
    )
}

export default BlogBtn