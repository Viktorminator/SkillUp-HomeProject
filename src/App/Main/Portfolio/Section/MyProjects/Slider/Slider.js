import React, {Component}  from 'react'
import {Carousel} from 'react-responsive-carousel'

import "react-responsive-carousel/lib/styles/carousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "react-responsive-carousel/lib/styles/main.css"
import "react-responsive-carousel/lib/styles/main.min.css"

import slide1 from './Images/collage-cite-1.png'
import slide2 from './Images/collage-cite-2.png'
import slide3 from './Images/collage-cite-3.png'
import slide4 from './Images/collage-cite-4.png'

class Slider extends Component{
    render() {
        return (
            <Carousel>
                <div>
                    <img src={slide1} alt= "slide1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slide2} alt= "slide2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={slide3} alt= "slide3" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slide4} alt= "slide4" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        )
    }
}

export default Slider