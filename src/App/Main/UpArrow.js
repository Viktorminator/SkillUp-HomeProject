import React, {Component} from 'react'
import './UpArrow.css'
import Arrow from './pageUp.png'
import {Link} from 'react-scroll'

class UpArrow extends Component {
    render() {

        const {
            activeClass,
            to,
            spy,
            smooth,
            offset,
            duration
        } = this.props   

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
}

export default UpArrow