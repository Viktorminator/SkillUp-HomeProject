import React, {Component} from 'react'
import SelfPhoto from '../Main/About/Section/PartOne/SelfPhoto/SelfPhoto'
import PostData, {getProductsMap} from '../Main/Blog/Section/MainBlog/PostData'

import './PostPage.css'

class PostPage extends Component {
    render() {
        
        const {
            match,
            productsMap = getProductsMap(PostData)
        } = this.props

        console.log(productsMap[match.params.id].date)

        return (
            <main className='postPage'>
                <div className='post-wrapper'>
                    <div className='image-container'>
                        <img src={productsMap[match.params.id].img}/>
                    </div>
                    <div className='title'>
                        <h1>{productsMap[match.params.id].title}</h1>
                        <p>{productsMap[match.params.id].theme}</p>
                    </div>
                    <p>
                        {productsMap[match.params.id].description}
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