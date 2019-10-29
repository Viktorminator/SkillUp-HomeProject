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
            <div className="footer-rights">
                &#169; 2019 Kyiv. Copyright. All rights reserved
            </div>    
            <div className="networks">
                <Network
                    src = {twitter}
                    nameClass = "twitter"
                    alt = "twitter"
                    href = 'https://twitter.com/?lang=ru'
                />
                <Network
                    src = {instagram}
                    nameClass = "instagram"
                    alt = "instagram"
                    href='https://www.instagram.com/m_shamanskyi/?hl=ru'
                />
                <Network
                    src = {chrome}
                    nameClass = "chrome"
                    alt = "chrome"
                    href='https://accounts.google.com/ServiceLogin?service=chromiumsync#identifier'
                />
                <Network
                    src = {telegram}
                    nameClass = "telegram"
                    alt = "telegram"
                    href='https://t.me/GrandM_ks'
                />
            </div>
        </footer>
    )
}

export default Footer