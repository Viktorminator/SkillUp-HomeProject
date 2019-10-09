import React from 'react'
import SelfPhoto from './SelfPhoto/SelfPhoto'

import './PartOne.css'

function PartOne() {
    return (
        <div className = "about-part-1">
            <SelfPhoto/>
            <div className="about-text">
                <h4>I applied for a front-end web developer position through the Stack Overflow jobs section 
                    and thought if nothing else it’ll be great practice.</h4>
                <p>
                    They required to conceptually understand the languages that I work with (HTML, CSS, 
                    JavaScript), code on-the-spot (eek), leverage sorting and searching algorithms from 
                    Computer Science (bubble sort, merge sort, binary search, etc.), and have understanding 
                    of many related technologies and areas such as HTTPS, REST, and Software Development 
                    Methodologies like Agile.
                </p>
            </div>
        </div>
    )
}

export default PartOne