import React from 'react'
import About from './About/About'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'

import './Main.css'

function Main(){
    return (
        <main>
            <Home/>
            <About/>
            <Portfolio/>
        </main>
    ) 
}

export default Main