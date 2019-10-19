import React from 'react'
import SideBatItem from './SideBarItem/SideBarItem'
import htmlImg from './SideBarItem/img/html.png'
import cssImg from './SideBarItem/img/css.jpg'
import jsImg from './SideBarItem/img/javascript.png'
import angularImg from './SideBarItem/img/angular.png'
import reactImg from './SideBarItem/img/react.png'

import './SideBar.css'

const
    html = {
        backgroundImage: `url(${htmlImg})`
    },
    css = {
        backgroundImage: `url(${cssImg})`
    },
    js = {
        backgroundImage: `url(${jsImg})`
    },
    angular = {
        backgroundImage: `url(${angularImg})`
    },
    react = {
        backgroundImage: `url(${reactImg})`
    }

function SideBar() {

    return (
        <div className='blog-sidebar'>
            <SideBatItem
                img = {html}
            />
            <SideBatItem
                img = {css}
            />
            <SideBatItem
                img = {js}
            />
            <SideBatItem
                img = {angular}
            />
            <SideBatItem
                img = {react}
            />
        </div>
    )
}

export default SideBar