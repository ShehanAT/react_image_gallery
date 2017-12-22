import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search.js';

class Dogs extends Component {
    render(){
        return (
            <div>
            <NavLink to='/cats' className="btn btn-primary">Cats</NavLink>
            <NavLink to='/dogs' className="btn btn-primary">Dogs</NavLink>
            <NavLink to='/sunsets' className="btn btn-primary">Sunsets</NavLink>
            <Search subject='Dogs'/>
            
            </div>
        )
    }       
}

export default Dogs;