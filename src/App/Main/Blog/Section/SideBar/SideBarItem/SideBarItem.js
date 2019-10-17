import React, {Component} from 'react'

class SideBarItem extends Component {
    render() {

        const {
            img
        } = this.props

        return (
            <div 
                className='sidebar-item'
                style = {img}
            />
        )
    }
}

export default SideBarItem