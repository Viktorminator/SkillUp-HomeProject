import React, {Component} from 'react'
import Like from './Like/Like'

import './PostItem.css'

class PostItem extends Component {

    render () {

        const {
            img,
            alt = "Post's image",
            date = "Post's date",
            description = "Post's description"
        } = this.props

        return(
            <div className='post'>
            <div className='post-image'>
                <img src={img} alt={alt}/>
            </div>
            <div className='post-date'>
                <div>
                    {date}
                </div>
                <Like/>
            </div>
            <div className='post-description'>
                {description}
            </div>
        </div>
        )
    }
}



export default PostItem