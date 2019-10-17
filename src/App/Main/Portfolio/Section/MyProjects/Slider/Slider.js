import React, {Component}  from 'react'
import SliderBtn from './SliderBtn'
import ImageArray from './ImageArray'

import './Slider.css'

class Slider extends Component{

    state = {
        position: {
            left: '0px',
        }
    }

    newSlide = (productId) => {
        if (productId == 1) {
            this.setState (() => ({
                position : {
                    left: '0px'
                }
            }))
        } else if (productId == 2) {
            this.setState (() => ({
                position : {
                    left: '-1024px'
                }
            }))
        } else if (productId == 3) {
            this.setState (() => ({
                position : {
                    left: '-2048px'
                }
            }))
        } else if (productId == 4) {
            this.setState (() => ({
                position : {
                    left: '-3072px'
                }
            }))
        }
    }

    render() {
        return (
            <div className="slide-container">
                <div className="image-container" style = {this.state.position}>
                    {
                        ImageArray.map(({
                            image,
                            alt,
                            id
                        }) => {
                            return (
                                <img 
                                    src={image} 
                                    alt={alt} 
                                    key={id}
                                />
                            )
                        })
                    }
                </div>
                <div className="button-container">
                    {
                        ImageArray.map(({
                            id
                        })=>{
                            return (
                                <SliderBtn
                                    id = {id}
                                    newSlide = {this.newSlide}
                                    key={id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Slider