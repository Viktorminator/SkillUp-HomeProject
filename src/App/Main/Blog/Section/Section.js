import React, {Component} from 'react'
import SideBar from './SideBar/SideBar'
import MainBlog from './MainBlog/MainBlog'
import PostData from './MainBlog/PostData'

import './Section.css'


class Section extends Component {
    
    state = {
        PostArray: {PostData}
    }

    Filter = (theme) => {
        let filterArray = PostData.filter(function(curent){
            return curent.theme == theme
        })
        
        console.log(filterArray)
        
    }

    render() {
        return (
            <section className='blog-section'>
            <SideBar
                Filter = {this.Filter}
            />
            <MainBlog
                PostArray = {this.state.PostArray.PostData}
            />
        </section>
        )
    }

}

export default Section