import React from 'react'
import SideBarItem from './SideBarItem/SideBarItem'
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

function SideBar({
    Filter,
    Reset
}) {

    return (
        <div className='blog-sidebar'>
            <SideBarItem
                img = {html}
                Filter = {Filter}
                theme = 'html'
            />
            <SideBarItem
                img = {css}
                Filter = {Filter}
                theme = 'css'
            />
            <SideBarItem
                img = {js}
                Filter = {Filter}
                theme = 'js'
            />
            <SideBarItem
                img = {angular}
                Filter = {Filter}
                theme = 'angular'
            />
            <SideBarItem
                img = {react}
                Filter = {Filter}
                theme = 'react'
            />
            <div className='reset' onClick={()=>{Reset()}}>
                Reset
            </div>
        </div>
    )
}

export default SideBar