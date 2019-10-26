import React, {Component} from 'react'
import SideBar from './SideBar/SideBar'
import MainBlog from './MainBlog/MainBlog'
import PostData from './MainBlog/PostData'

import './Section.css'

class Section extends Component {
    
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
        return (
            <section className='blog-section'>
            <SideBar
                Filter = {this.Filter}
                Reset = {this.Reset}
            />
            <MainBlog
                PostArray = {this.state.PostArray}
            />
        </section>
        )
    }
}

export default Section