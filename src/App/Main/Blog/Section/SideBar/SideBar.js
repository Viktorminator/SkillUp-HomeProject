import React from 'react'
import SideBatItem from './SideBarItem/SideBarItem'

import './SideBar.css'


function SideBar() {

    const bg = {
        backgroundColor: 'red'
    }

    return (
        <div className='blog-sidebar'>
            <SideBatItem
                img = {bg}
            />
        </div>
    )
}

export default SideBar