import React, {Component} from 'react'
import SubHeader from '../SubHeader/SubHeader'
import Section from './Section/Section'
import PostData from './Section/MainBlog/PostData'

import './Blog.css'

class Blog extends Component {
    
    state = {
        PostArray: PostData
    }

    Filter = (theme) => {
        let filterArray = PostData.filter(function(curent){
            return curent.theme === theme
        })
        
        this.setState({
            PostArray:filterArray
        })
    }

    Reset = () => {
        this.setState({
            PostArray: PostData
        })
    }

    render() {

        return(
            <div className='Blog' id='Blog'>
                <SubHeader
                    className='blog-header'
                    title='Latest blog posts'
                />
                <Section
                    PostArray={this.state.PostArray}
                    Filter={this.Filter}
                    Reset={this.Reset}
                />
            </div>
        )
    }
}

export default Blog