import React, { Component } from 'react';
import DataFetcher from './DataFetcher.js';



export default class Search extends Component {
    
    
    constructor (){
        super();
        this.state = {
            searchTerm: '',
            queryTerm: ''
        }
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            searchTerm: this.query.value
        })
        this.setState({
            queryTerm: this.state.searchTerm
        })
        e.currentTarget.reset();
        
    }
    
   
    render(){
        
        return (
            <form className="search-term-area" onSubmit={this.handleSubmit}>         
            <input type='search' className='search-box' id='searchTerm' 
            ref={(input) => this.query = input}
            />
            <button className="btn btn-primary" id="search-btn" type='submit'>Search</button>
            <h3 className="App-intro">
              To get started, type in a search term and click to Search.
            </h3>
            
            <div className='main-content-toggle'><h3><a href='/'>Click Here</a> to go back to the main page</h3></div>
            <div className='results' id='results'>
             
             { 
                 (this.state.searchTerm !== this.state.queryTerm) ?
                 <DataFetcher subject={this.state.searchTerm}/> : null
             }
                 
             
             
            </div>
            
            </form>
        )
    }       
}
