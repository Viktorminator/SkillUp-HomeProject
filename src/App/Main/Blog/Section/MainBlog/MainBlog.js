import React from 'react'
import PostData from './PostData'
import PostItem from './PostItem/PostItem'
import BlogBtn from './BlogBtn/BlogBtn'

import './MainBlog.css'



function Main() {
    return (
        <div className='blog-main'>
            <div className='blog-posts'>
                {PostData.map(({
                    img,
                    alt,
                    date,
                    description,
                    likes
                })=>{
                    return (
                        <PostItem
                            img = {img}
                            alt = {alt}
                            date = {date}
                            description = {description}
                            likes = {likes}
                        />
                    )
                })}
            </div>
            
            <BlogBtn/>

        </div>
    )
}

export default Main