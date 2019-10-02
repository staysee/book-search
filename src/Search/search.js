import React from 'react'
import './search.css'

import SearchBar from '../SearchBar/searchBar'
import SearchFilter from '../SearchFilter/searchFilter'

class Search extends React.Component{
    render() {
        return(
            <div className="Search">
                <SearchBar />
                <SearchFilter />
            </div>
        )
    }
}
export default Search