import React from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';

function Search() {
    return (
        <div className="search">
            <SearchIcon/>
             <input   type="text" placeholder="Search your destination"/>
        </div>
    )
}

export default Search
