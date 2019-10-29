import React from 'react'
import './searchBox.css'

function SearchBox(props){
    return(
        <div className="SearchBox">
            <form 
                className="SearchBox__form"
                onSubmit={props.handleSubmit}>
                <label htmlFor="search">Search: </label>
                <input 
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    value={props.searchTerm}
                    onChange={e => props.updateSearchTerm(e.target.value)} />
                
                <button 
                    type="submit"
                    onSubmit={e => props.handleSubmit(e)}>
                        Search
                </button>
            </form>
        </div>
    )
}

export default SearchBox