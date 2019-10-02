import React from 'react'
import './booklist.css'

import Book from '../Book/book'

class BookList extends React.Component{
    render() {
        const { bookList } = this.props;
        const books = bookList.map((book, i) => 
            <Book 
                key={i} 
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors[0]}
                price={book.saleInfo.listPrice ? `$${book.saleInfo.listPrice.amount}` : "Not for sale"}
                description={book.searchInfo.textSnippet}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                />
        )
        
        return(
            <div className="book-list">
                {books}
            </div>
        )
    }
}

export default BookList