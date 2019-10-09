import React from 'react'

import './PartTwo.css'

function PartTwo() {
    return (
        <div className = "about-part-2">
            <div>
                <h3>
                    What I do
                </h3>
                <p>
                    I'm as a front-end developer links together the world of design and technology, packaging up the 
                    utility of the back end in an inviting way for users to interact with. 
                    Take website design files and convert them into HTML, JavaScript (JS) and/or CSS code 
                    - the core elements of front-end development. This includes design/layout, content, 
                    buttons, images, navigation, and internal links.
                </p>
            </div>
            <div>
                <h3>
                    What my progress
                </h3>
                <p>
                    I was thinking of doing a windows performance testing, but that's better suited for 
                    figuring out the load time after the page has loaded once. Someone mentioned a workaround 
                    where I tie the performance testing to an image, then use that image's loadtime to 
                    estimate general load time, but I couldn't make it work and someone else on SO said the 
                    API only works in measure the entire document's loadtime, not a specific element. 
                </p>
            </div>
            <div>
                <h3>
                    What my skills
                </h3>
                <p>
                    Skill 1: HTML <br/>
                    Skill 2 – CSS <br/>
                    Skill 3 – JavaScript <br/>
                    Skill 4: JavaScript Libraries and Frameworks <br/>
                    Skill 5 – Testing Code <br/>
                    For all this I additional know: React, Angular, JQuery and other frameworks.
                </p>
            </div>
        </div>
    )
}

export default PartTwo