import React, {Component} from 'react'

import './PostItem.css'

class PostItem extends Component {

    state = {
        likes: 0
    }

    addLike = () => {
        this.setState((prevState)=>({
            likes:prevState.likes + 1
        }))
    }

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
                <div className='post-like'>
                    <p className='likes-value'>{this.state.likes}</p> 
                    <img 
                        src='Images/like.jpg' 
                        alt='like' 
                        className='like'
                        onClick = {()=>{this.addLike()}}
                    />   
                </div>
            </div>
            <div className='post-description'>
                {description}
            </div>
        </div>
        )
    }
}



export default PostItem