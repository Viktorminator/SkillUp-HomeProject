import React from 'react'
import About from './About/About'
import Home from './Home/Home'
import Portfolio from './Portfolio/Portfolio'
import Blog from './Blog/Blog'
import Contacts from './Contacts/Contacts'
import UpArrow from './UpArrow'
import PostPage from '../PostPage/PostPage'
import {Route} from 'react-router-dom'

import './Main.css'


function Main(){
    return (   
            <main>
                <Route path='/Home' component={Home}/>
                <Route path='/Home' component={About}/>
                <Route path='/Home' component={Portfolio}/>
                <Route path='/Home' component={Blog}/>
                <Route path='/Home' component={Contacts}/>
                <UpArrow
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500}
                />
                <Route path='/blog-1' component={PostPage}/>
            </main>   
    ) 
}

export default Main
