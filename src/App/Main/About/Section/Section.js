import React from 'react'
import PartOne from './PartOne/PartOne'
import PartTwo from './PartTwo/PartTwo'
import HireButton from './HireButton/HireButton'

import './Section.css'


function Section() {
    return(
        <section className = "about-section">
            <PartOne/>
            <PartTwo/>
            <HireButton/>
        </section>
    )
}

export default Section