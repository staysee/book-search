import React from 'react'
import './searchBar.css'

import SearchBox from '../SearchBox/searchBox'
import SearchFilter from '../SearchFilter/searchFilter'

class Search extends React.Component{
    render() {
        return(
            <div className="Search">
                <SearchBox
                    searchTerm={this.props.searchTerm}
                    handleUpdate={this.props.handleUpdate}
                    handleSubmit={this.props.handleSubmit}
                    onChangePrintType={this.props.onChangePrintType} />
                <SearchFilter />
            </div>
        )
    }
}
export default Search