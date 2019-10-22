import React, {Component} from 'react'

class SideBarItem extends Component {
    render() {

        const {
            img,
            Filter,
            theme
        } = this.props

        return (
            <div 
                className='sidebar-item'
                style = {img}
                onClick = {()=>{Filter(theme)}}
            />
        )
    }
}

export default SideBarItem