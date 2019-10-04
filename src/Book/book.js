import React from 'react'
import './book.css'

class Book extends React.Component{
    render(){

        const { volumeInfo, saleInfo, searchInfo } = this.props;

        return(
            <div className="book">
                <img 
                className='book-images' 
                src={volumeInfo.imageLinks.thumbnail}
                alt='book'/>
                <h2>{volumeInfo.title}</h2>
                <p>Author: {volumeInfo.authors[0]}</p>
                <p>Price: {saleInfo.listPrice ? `$${saleInfo.listPrice.amount}` : `Not for sale`}</p>
                <p>{searchInfo.textSnippet}</p>
            </div>
        )
    }
}

export default Book