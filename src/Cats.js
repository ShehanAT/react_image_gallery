import React, { Component } from 'react';
import axios from 'axios';
import apikey from './config.js';
import { NavLink } from 'react-router-dom';
import Loading from 'react-loading-animation';
import DataFetcher from './DataFetcher';

class Cats extends React.Component {
    render(){
        return (
            <div>
            <NavLink to='/cats' className="btn btn-primary">Cats</NavLink>
            <NavLink to='/dogs' className="btn btn-primary">Dogs</NavLink>
            <NavLink to='/sunsets' className="btn btn-primary">Sunsets</NavLink>
            <h3><a href='/search'>Click Here</a> to search for pictures</h3>
            <DataFetcher subject='Cats'/>
            </div>
        )
    }       
}

export default Cats;