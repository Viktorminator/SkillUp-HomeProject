import React, {Component} from 'react'

import './Like.css'

class Like extends Component {
    
    state = {
        likes: 0
    }

    addLikes = () => {
        this.setState((prevState)=>{
            this.setState({
                likes: prevState.likes + 1
            })
        })
    }

    render () {
        return (
            <div className='post-like'>
                <p className='likes-value'>{this.state.likes}</p> 
                <img 
                    src='Images/like.jpg' 
                    alt='like' 
                    className='like'
                    onClick = {()=>{this.addLikes()}}
                />   
            </div>
        )
    }
}

export default Like