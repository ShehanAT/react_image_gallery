import React, { Component } from 'react';
import axios from 'axios';
import apikey from './config.js';
import SearchForm from './components/SearchForm';
import NoPics from './NoPics';
import Loading from 'react-loading-animation';
import DataFetcher from './DataFetcher.js';
import ReactDOM from 'react-dom';



export default class Search extends Component {
   
    constructor (){
        super();
        this.state = {
            searchTerm: '',
            isLoading: false,
        }
    this.handleTextInput = this.handleTextInput.bind(this);
    }
    handleSubmit = e => {
        e.preventDefault();
        ReactDOM.render(<DataFetcher subject={this.query.value}/>, document.getElementById('results'))//need a way to dynamically render data fetching component AFTER form submisson
        //this code throws 
        e.currentTarget.reset();

    }
    handleTextInput(e){
        console.log(e)
        this.setState({
            searchTerm: e.target.value,
            isLoading:true
        })
    }
    render(){
        
        return (
            <form className="search-term-area" onSubmit={this.handleSubmit}>         
            <input type='search' className='search-box' id='searchTerm' 
            onChange={this.handleTextInput}
            ref={(input) => this.query = input}
            />
            <button className="btn btn-primary" id="search-btn" type='submit'>Search</button>
            <h3 className="App-intro">
              To get started, type in a search term and click to Search.
            </h3>
            <div className='main-content-toggle'><h3><a href='/'>Click Here</a> to go back to the main page</h3></div>
            <div className='results' id='results'></div>
            
            
            </form>
        )
    }       
}
