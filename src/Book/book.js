import React from 'react'
import './book.css'

class Book extends React.Component{
    render(){

        const { volumeInfo, saleInfo } = this.props;

        const formatAuthors = (authors) =>{
            if (authors.length === 1){
                authors = authors[0]
            } else if (authors.length <= 2){
                authors = authors.join(' and ');
            } else if (authors.length > 2){
                let lastAuthor = ' and ' + authors.slice(-1)
                authors.pop();
                authors = authors.join(', ');
                authors += lastAuthor;
            }
            return authors;
        }

        return(
            <div className="book">
                <div className="book-image-container">
                    <img 
                        className='book-image' 
                        src={volumeInfo.imageLinks.thumbnail}
                        alt='book'/>
                </div>
                
                <div className="book-info">
                    <h2>{volumeInfo.title}</h2>
                    <p>{volumeInfo.authors ? `Author: ${formatAuthors(volumeInfo.authors)}` : ``}</p>
                    <p>Price: {saleInfo.listPrice ? `$${saleInfo.listPrice.amount}` : `Not for sale`}</p>
                    <p>{volumeInfo.description}</p>
                </div>
            </div>
        )
    }
}

export default Book