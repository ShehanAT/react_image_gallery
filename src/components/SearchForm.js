import React from 'react';
import PropTypes from 'prop-types';

  
const SearchForm = props => {
  return (
    <div className="search-term-area">         
    <input type='search' className='search-box' id='searchTerm' 
    value={props.searchTerm} 
    onChange={props.handleTextInput}
    />
    <button className="btn btn-primary" id="search-btn" onClick={props.handleOnClick}>Search</button>
    <h3 className="App-intro">
      To get started, type in a search term and click to Search.
    </h3>
    <div className='main-content-toggle'><h3><a href='/'>Click Here</a> to go back to the main page</h3></div>
    </div>
  )
}

SearchForm.PropTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleTextInput: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired
}

export default SearchForm;