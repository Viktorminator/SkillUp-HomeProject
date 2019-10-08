import React from 'react'
import SubHeader from '../SubHeader/SubHeader'
import Section from './Section/Section'

import './About.css'

function About() {
    return (
        <div className = "about">
            <SubHeader
                nameClass = "about-header"
                title = "A little about me"
            />
            <Section/>
        </div>
    )
}

export default About