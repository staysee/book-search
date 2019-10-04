import React from 'react'
import './search.css'

import SearchBar from '../SearchBar/searchBar'
import SearchFilter from '../SearchFilter/searchFilter'

class Search extends React.Component{
    render() {
        return(
            <div className="Search">
                <SearchBar
                    searchTerm={this.props.searchTerm}
                    handleUpdate={this.props.handleUpdate}
                    handleSubmit={this.props.handleSubmit} />
                <SearchFilter />
            </div>
        )
    }
}
export default Search