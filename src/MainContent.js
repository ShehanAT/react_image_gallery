import React from 'react';
import { NavLink} from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Search from './Search';


// App components
const MainContent = props => {
    return (
        <body>
        <div className="container"> 
            <NavLink to='/cats' className="btn btn-primary">Cats</NavLink>
            <NavLink to='/dogs' className="btn btn-primary">Dogs</NavLink>
            <NavLink to='/sunsets' className="btn btn-primary">Sunsets</NavLink> 
            <Search subject='Cats'/>
           
        </div>
        </body>
     
    )
}
MainContent.PropTypes = {
    handleCatPage: PropTypes.func.isRequired,
    handleDogPage: PropTypes.func.isRequired,
    handleSunsetPage: PropTypes.func.isRequired
}

export default MainContent;
   