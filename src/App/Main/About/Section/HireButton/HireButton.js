import React from 'react'

import telegram from './telegram.png'
import './HireButton.css'

function HireButton() {
    return (
        <a href="#contacts" className="about-part-3 about-button">
            <img src = {telegram} alt="telegram"/> Hire me
        </a>
    )
}

export default HireButton