import React, {Component} from 'react'

class SideBarItem extends Component {
    render() {

        const {
            img,
            Filter
        } = this.props

        return (
            <div 
                className='sidebar-item'
                style = {img}
                onClick = {()=>{Filter()}}
            />
        )
    }
}

export default SideBarItem