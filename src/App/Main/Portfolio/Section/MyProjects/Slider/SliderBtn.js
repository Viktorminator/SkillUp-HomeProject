import React, {Component} from 'react'

import './SliderBtn.css'

class SliderBtn extends Component {

    state = {
        newClass: {
            class: 'slider-button'
        }
    }

    newClass = (buttonId) => {
        this.setState(()=>({
            newClass: {
                class: 'slider-button active'
            }
        }))
    }
    
    render () {
        const {
            id,
            newSlide
        } = this.props
        
        return (
            <div
                className= {this.state.newClass.class}
                key={id}
                onClick = {()=>{newSlide(id)}}
            />
        )
    }
   
}

export default SliderBtn