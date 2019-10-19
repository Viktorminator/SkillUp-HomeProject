import React, {Component} from 'react'
import PostData from './PostData'
import PostItem from './PostItem/PostItem'
import BlogBtn from './BlogBtn/BlogBtn'

import './MainBlog.css'


class Main extends Component {

    state = {
        height: '680px'
    }

    changeHeight = () => {
        this.setState({
            height: 'auto'
        })
    }
    
    render () {
        return (
            <div className='blog-main'>
            <div className='blog-posts' style = {this.state}>
                {PostData.map(({
                    id,
                    img,
                    alt,
                    date,
                    description
                })=>{
                    return (
                        <PostItem
                            key = {id}
                            img = {img}
                            alt = {alt}
                            date = {date}
                            description = {description}
                        />
                    )
                })}
            </div>
            <BlogBtn
                changeHeight = {this.changeHeight}
            />
        </div>
        )
    }
}

export default Main