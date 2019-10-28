import React from 'react'
import './searchBar.css'

import SearchBox from '../SearchBox/searchBox'
import SearchFilter from '../SearchFilter/searchFilter'

class SearchBar extends React.Component{
    render() {
        return(
            <div className="Search">
                <SearchBox
                    updateSearchTerm={this.props.updateSearchTerm}
                    handleSubmit={this.props.handleSubmit} />
                <SearchFilter
                    updatePrintType={this.props.updatePrintType}
                    updateBookType={this.props.updateBookType} />
            </div>
        )
    }
}
export default SearchBar