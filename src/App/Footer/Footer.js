import React from 'react'
import Network from '../Main/Home/Network/Network'

import twitter from '../Main/Home/Images/twitter-footer.png'
import instagram from '../Main/Home/Images/instagram-footer.png'
import chrome from '../Main/Home/Images/chrome-footer.png'
import telegram from '../Main/Home/Images/telegram-footer.png'

import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-rights" id='Footer'>
                &#169; 2019 Kyiv. Copyright. All rights reserved
            </div>    
            <div className="networks">
                <Network
                    src = {twitter}
                    nameClass = "twitter"
                    alt = "twitter"
                />
                <Network
                    src = {instagram}
                    nameClass = "instagram"
                    alt = "instagram"
                />
                <Network
                    src = {chrome}
                    nameClass = "chrome"
                    alt = "chrome"
                />
                <Network
                    src = {telegram}
                    nameClass = "telegram"
                    alt = "telegram"
                />
            </div>
        </footer>
    )
}

export default Footer