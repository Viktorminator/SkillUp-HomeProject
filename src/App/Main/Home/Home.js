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
        </div>
    ) 
}

export default Home