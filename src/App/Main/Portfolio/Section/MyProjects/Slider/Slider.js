import React from 'react'
import Slider from 'react-animated-slider'
import ImageArray from './ImageArray'

import 'react-animated-slider/build/horizontal.css'
import './Slider.css'

const NewSlider = () => {
    return (
        <Slider 
            className = 'slider-wrapper'
            autoplay = '4000'
        >
            {ImageArray.map((item,index)=>(
                <div
                    key = {index}
                    className='slider-content'
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <section>
                        <img src={item.userProfile} alt={item.user}/>
                        <span>
							Posted by <strong>{item.user}</strong>
						</span>
                    </section>
                    
                </div>
            ))}
        </Slider>
    )
}

export default NewSlider