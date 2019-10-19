import React from 'react'
import SideBar from './SideBar/SideBar'
import MainBlog from './MainBlog/MainBlog'

import './Section.css'


function Section() {
    return (
        <section className='blog-section'>
            <SideBar/>
            <MainBlog/>
        </section>
    )
}

export default Section