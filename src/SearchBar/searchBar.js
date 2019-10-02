import React from 'react'
import './searchBar.css'

class SearchBar extends React.Component{
    render(){
        return(
            <div className="search-bar">
                <form className="search-bar__form">
                    <label htmlFor="search">Search</label>
                    <input 
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search" />
                    
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar