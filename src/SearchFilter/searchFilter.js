import React from 'react'
import './searchFilter.css'

class SearchFilter extends React.Component{
    render(){
        const printOptions = ['all', 'books', 'magazines'];
        const printOptionsList = printOptions.map((option, i) =>
            <option key={i} id={option} value={option}>{option}</option>
        )
        return(
            <div className="search-filter">
                <form className="search-filter__form">
                    <label htmlFor="printtype_options">Print Type:</label>
                    <select
                        id="printtype_options"
                        name="printtype_options"
                        value={this.props.printType}
                        onChange={e => this.props.ChangePrintType(e.target.value)}>
                        
                        {printOptionsList}
                    </select>

                    <label htmlFor="booktype_options">Book Type:</label>
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