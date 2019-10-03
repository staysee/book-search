import React from 'react'
import './book.css'

class Book extends React.Component {
    render(){
        const { thumbnail, title, author, price, description } = this.props;
            return (
                <div className="book">
                    <img 
                    className='book-images' 
                    src={thumbnail}
                    alt='book'/>
                    <h2>{title}</h2>
                    <p>Author: {author}</p>
                    <p>Price: {price}</p>
                    <p>{description}</p>
                </div>
            )

    }
    
}

export default Book