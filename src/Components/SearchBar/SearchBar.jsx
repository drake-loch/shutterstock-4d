import React from 'react';
import './SearchBar.scss';

function SearchBar() {
    return (
        <div className="search">
            <form className="search__form">
                <input placeholder="Search..." className="search__form__input" type="text"/>
            </form>
        </div>
    )
}

export default SearchBar