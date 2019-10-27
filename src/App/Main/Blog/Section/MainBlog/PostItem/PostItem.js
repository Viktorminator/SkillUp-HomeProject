import React, {Component} from 'react'
import Like from './Like/Like'
import {NavLink} from 'react-router-dom'

import './PostItem.css'

class PostItem extends Component {

    render () {

        const {
            img,
            alt = "Post's image",
            date = "Post's date",
            description = "Post's description",
            id
        } = this.props
        
        return(
            <div className='post'>
                <div className='post-image'>
                    <NavLink 
                        to={id}
                        className='post-reference'
                    >
                        <img src={img} alt={alt}/>
                    </NavLink>    
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