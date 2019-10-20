import React from 'react'
import SubHeader from '../SubHeader/SubHeader'
import Section from './Section/Section'

import './Blog.css'

function Blog () {
    return (
        <div className='Blog' id='Blog'>
            <SubHeader
                className='blog-header'
                title='Latest blog posts'
            />
            <Section/>
        </div>
    )
}

export default Blog