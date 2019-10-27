import React, {Component} from 'react'
import SideBar from './SideBar/SideBar'
import MainBlog from './MainBlog/MainBlog'

import './Section.css'

class Section extends Component {
    
    render() {

        const {
            PostArray,
            Filter,
            Reset
        } = this.props

        return (
            <section className='blog-section'>
            <SideBar
                Filter = {Filter}
                Reset = {Reset}
            />
            <MainBlog
                PostArray = {PostArray}
            />
        </section>
        )
    }
}

export default Section