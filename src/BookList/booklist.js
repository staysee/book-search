import React from 'react'
import './booklist.css'

import Book from '../Book/book'

class BookList extends React.Component{
    render() {
        const { bookList } = this.props;
        const books = bookList.map((book, i) => <Book {...book} key={i} />)
        
        return(
            <div className="book-list">
                {books}
            </div>
        )
    }
}

export default BookList