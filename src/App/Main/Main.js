import React from 'react'
import About from './About/About'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Blog from './Blog/Blog'
import Contacts from './Contacts/Contacts'
import UpArrow from './UpArrow'

import './Main.css'


function Main(){
    return (
        <main>
            <Home/>
            <About/>
            <Portfolio/>
            <Blog/>
            <Contacts/>
            <UpArrow
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
            />
        </main>
    ) 
}

export default Main