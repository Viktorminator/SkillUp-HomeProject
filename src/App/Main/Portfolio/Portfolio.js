import React from 'react'
import SubHeader from '../SubHeader/SubHeader'
import Section from './Section/Section'

import './Portfolio.css'

function Portfolio(){
    return (
        <div className = "portfolio">
            <SubHeader
                className = "portfolio-header"
                title = "My projects"
            />
           <Section/>
        </div>
    )
}

export default Portfolio