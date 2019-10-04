import React from 'react'
import './searchFilter.css'

class SearchFilter extends React.Component{
    render(){
        return(
            <div className="search-filter">
                <form className="search-filter__form">
                    <label htmlFor="print-type">Print Type:</label>
                    <select
                        id="print-type"
                        name="print-type">
                        <option value="All">All</option>
                        <option value="Books">Books</option>
                        <option value="Magazines">Magazines</option>

                    </select>

                    <label htmlFor="book-type">Book Type:</label>
                    <select
                        id="book-type"
                        name="book-type">
                        <option value="No Filter">No Filter</option>

                    </select>
                </form>

            </div>
        )
    }
}

export default SearchFilter