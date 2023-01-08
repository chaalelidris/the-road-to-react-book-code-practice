import React from 'react';

// Search component
const Search = props => {


    return (
        <div className='search'>
            <input id="search" onChange={props.onSearch} type="text" placeholder='Search' />


        </div>
    )
}

export default Search;