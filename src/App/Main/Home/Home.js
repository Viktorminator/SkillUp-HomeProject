import React from 'react'

import Network from './Network/Network'
import Developer from './Developer/Developer'

import './Home.css'
import twitter from './Images/twitter.png'
import instagram from './Images/instagram.png'
import chrome from './Images/chrome.png'
import telegram from './Images/telegram.png'

function Home() {

    return(
        <div className="slider" id='Home'>
            <Developer
                developer = "I'm Maksym Shamanskyi"
                profession = "Front-end developer"
            />
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
                    href = 'https://www.instagram.com/m_shamanskyi/?hl=ru'
                />
                <Network
                    src = {chrome}
                    nameClass = "chrome"
                    alt = "chrome"
                    href = 'https://accounts.google.com/ServiceLogin?service=chromiumsync#identifier'
                />
                <Network
                    src = {telegram}
                    nameClass = "telegram"
                    alt = "telegram"
                    href = 'https://t.me/GrandM_ks'
                />
            </div>    
        </div>
    ) 
}

export default Home