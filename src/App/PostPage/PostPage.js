import React, {Component} from 'react'
import SelfPhoto from '../Main/About/Section/PartOne/SelfPhoto/SelfPhoto'

import './PostPage.css'

class PostPage extends Component {
    render(){
        return (
            <main className='postPage'>
                <div className='post-wrapper'>
                    <img src='./Images/blog1.jpg'/>
                    <div className='title'>
                        <h1>The Ultimate HTML Cheat Sheet For Beginners</h1>
                        <p>html</p>
                    </div>
                    <p>
                        Below is a complete guide of HTML codes that you can copy and paste for use on your own blog or website. 
                        Although I like to insist on bloggers taking the time to learn how to write these codes and know what each part 
                        of them does, sometimes you need a code in a pinch! Be sure to view the other tutorials on this site for more 
                        in-depth demonstrations and explanations of coding.
                    </p>
                </div>
                <div className='author-wrapper'>
                    <SelfPhoto/>
                    <h4>
                        Hey there!
                    </h4>
                    <p>
                        They required to conceptually understand the languages that I work with (HTML, CSS, 
                        JavaScript), code on-the-spot (eek), leverage sorting and searching algorithms from 
                        Computer Science (bubble sort, merge sort, binary search, etc.), and have understanding 
                        of many related technologies and areas such as HTTPS, REST, and Software Development 
                        Methodologies like Agile.
                    </p>
                </div>
                
            </main>
        )
    }
}

export default PostPage