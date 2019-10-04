import React from 'react'
import './book.css'

class Book extends React.Component{
    render(){

        const { volumeInfo, saleInfo } = this.props;

        const multipleAuthors = (authors) =>{
            if (authors.length <= 2){
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
                <img 
                className='book-images' 
                src={volumeInfo.imageLinks.thumbnail}
                alt='book'/>
                <h2>{volumeInfo.title}</h2>
                <p>Author: {volumeInfo.authors.length === 1 ? `${volumeInfo.authors[0]}` : multipleAuthors(volumeInfo.authors)}</p>
                <p>Price: {saleInfo.listPrice ? `$${saleInfo.listPrice.amount}` : `Not for sale`}</p>
                <p>{volumeInfo.description}</p>
            </div>
        )
    }
}

export default Book