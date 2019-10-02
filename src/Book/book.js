import React from 'react'
import './book.css'

class Book extends React.Component{
    render(){
        return(
            <div className="book">
                <img 
                className='book-images' 
                src={this.props.volumeInfo.imageLinks.thumbnail}
                alt='book'/>
            </div>
        )
    }
}

export default Book