import React from 'react'
import './UpArrow.css'
import Arrow from './pageUp.png'
import {Link, animateScroll as scroll} from 'react-scroll'

function UpArrow({
    activeClass,
    to,
    spy,
    smooth,
    offset,
    duration
}) {
    return (
        <Link 
            className='upArrow'
            activeClass = {activeClass}
            to = {to}
            spy = {spy}
            smooth = {smooth}
            offset = {offset}
            duration = {duration}
        >
            <img src={Arrow} alt='arrow'/>
        </Link>
    )
}

export default UpArrow