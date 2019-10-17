import React from 'react'
import About from './About/About'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Blog from './Blog/Blog'

import './Main.css'

function Main(){
    return (
        <main>
            <Home/>
            <About/>
            <Portfolio/>
            <Blog/>
        </main>
    ) 
}

export default Main