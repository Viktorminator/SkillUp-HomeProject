import React from 'react'
import SideBar from './SideBar/SideBar'

import './Section.css'


function Section() {
    return (
        <section className='blog-section'>
            <SideBar/>
            <div className='blog-main'>
                <div className='blog-posts'>
                    <div className='post'>
                        <div className='post-image'>
                            <img src='Images/blog1.jpg' alt='image blog 1'/>
                        </div>
                        <div className='post-date'>
                        <div>
                            April 2019 || Kyiv
                        </div>
                        <div className='post-like'>
                            <p className='likes-value'>18</p> 
                            <img src='Images/like.jpg' alt='like' className='like'/>   
                        </div>
                        </div>
                        <div className='post-description'>
                                Below is a complete guide of HTML codes that you can copy and paste for use on your own 
                                blog or website. Although I like to insist on bloggers taking the time to learn how to write 
                                these codes and know what each part of them does, sometimes you need a code in a pinch! 
                                Be sure to view the other tutorials on this site for more in-depth demonstrations and 
                                explanations of coding.
                        </div>

                    </div>
                        
                </div>
                <div className='blog-button'>
                    <div id='readMore'>
                        Read more...
                    </div>
                        
                </div>

            </div>
        </section>
    )
}

export default Section