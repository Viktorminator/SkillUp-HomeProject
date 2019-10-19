import React from 'react'

import telegram from './telegram.png'
import './HireButton.css'

function HireButton({
    text = "Hire me"
}) {
    return (
        <a href="#contacts" className="about-part-3 about-button">
            <img src = {telegram} alt="telegram"/> {text}
        </a>
    )
}

export default HireButton