import React from 'react'
import './searchFilter.css'

function SearchFilter(props){
    return(
        <div className="search-filter">
            <form className="search-filter__form">
                <label htmlFor="printtype_options">Print Type:</label>
                <select
                    id="printtype_options"
                    name="printtype_options"
                    onChange={e => props.updatePrintType(e.target.value)}>
                    
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>

                </select>

                <label htmlFor="booktype_options">Book Type:</label>
                <select
                    id="book-type"
                    name="book-type"
                    onChange={e => props.updateBookType(e.target.value)}>

                    <option value="">No Filter</option>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="ebooks">Ebook</option>
                    <option value="paid-ebooks">Paid Ebook</option>
                    <option value="free-ebooks">Free Ebook</option>
                    
                </select>
            </form>

        </div>
    )
}

export default SearchFilter