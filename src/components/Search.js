import React from 'react';

const Search = () => {
    return (
        <form className='search-bar'>
            <input 
                type="text"
                className='search-bar-input'
                placeholder='Search...'
            />
        </form>
    );
};

export default Search;