import React from 'react'
import './searchBar.css'

class SearchBar extends React.Component{
    render(){
        return(
            <div className="search-bar">
                <form 
                    className="search-bar__form"
                    onSubmit={this.props.handleSubmit}>
                    <label htmlFor="search">Search</label>
                    <input 
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search"
                        value={this.props.searchTerm}
                        onChange={e => this.props.handleUpdate(e.target.value)} />
                    
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar