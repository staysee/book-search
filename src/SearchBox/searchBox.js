import React from 'react'
import './searchBox.css'

class SearchBox extends React.Component{
    render(){
        return(
            <div className="search-box">
                <form 
                    className="search-box__form"
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

export default SearchBox