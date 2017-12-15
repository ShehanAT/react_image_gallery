import React from 'react';
import { NavLink } from 'react-router-dom';
import DataFetcher from './DataFetcher.js';

class Sunsets extends React.Component {
    render(){
        return (
            <div>
            <NavLink to='/cats' className="btn btn-primary">Cats</NavLink>
            <NavLink to='/dogs' className="btn btn-primary">Dogs</NavLink>
            <NavLink to='/sunsets' className="btn btn-primary">Sunsets</NavLink>
            <h3><a href='/search'>Click Here</a> to search for pictures</h3>
            <DataFetcher subject='Sunsets'/>
            </div>
        )
    }       
}

export default Sunsets;