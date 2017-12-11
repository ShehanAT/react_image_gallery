import React from 'react';
import { NavLink} from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';



// App components
const MainContent = props => {
    return (
    
        <div className="MainContent-area">  
        
            <NavLink to='/cats' className="btn btn-primary">Cats</NavLink>
            <NavLink to='/dogs' className="btn btn-primary">Dogs</NavLink>
            <NavLink to='/sunsets' className="btn btn-primary">Sunsets</NavLink>
            <div className='search-page-toggle'>
                <h3><a href='/search'>Click Here</a> to search for pictures</h3>
            </div>
        </div>
     
    )
}
MainContent.PropTypes = {
    handleCatPage: PropTypes.func.isRequired,
    handleDogPage: PropTypes.func.isRequired,
    handleSunsetPage: PropTypes.func.isRequired
}

export default MainContent;
   