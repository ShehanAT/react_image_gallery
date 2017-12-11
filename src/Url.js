import React from 'react';
import PropTypes from 'prop-types';

const Url= ({match}) => {
    let term = match.params.term;
    return (
        <div className='main-content'>
        {term}

        </div>
    )
}

Url.PropTypes = {
    term: PropTypes.string.isRequired
}
export default Url;