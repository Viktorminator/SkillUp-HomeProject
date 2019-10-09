import React from 'react'
import MyProjects from './MyProjects/MyProjects'

import './Section.css'


function Section() {
    return(
        <section className = "portfolio-section">
            <div className= "section-description">
                <h3>
                    Project examples
                </h3>
                <p>
                    You can see below sample pages that I made during the front-end learning. 
                </p>
            </div>
            <MyProjects/>
        </section>
    )
}

export default Section