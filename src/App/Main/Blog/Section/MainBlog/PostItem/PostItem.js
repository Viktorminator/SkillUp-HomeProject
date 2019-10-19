import React from 'react'

import './PostItem.css'

function PostItem({
    img,
    alt = "Post's image",
    date = "Post's date",
    description = "Post's description",
    likes ='0'
}) {
    return(
        <div className='post'>
            <div className='post-image'>
                <img src={img} alt={alt}/>
            </div>
            <div className='post-date'>
                <div>
                    {date}
                </div>
                <div className='post-like'>
                    <p className='likes-value'>{likes}</p> 
                    <img src='Images/like.jpg' alt='like' className='like'/>   
                </div>
            </div>
            <div className='post-description'>
                {description}
            </div>
        </div>
    )
}
export default PostItem