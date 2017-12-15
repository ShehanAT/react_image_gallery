import React, { Component } from 'react';
import Loading from 'react-loading-animation';
import DataFetcher from './DataFetcher';

class UrlSearch extends Component {
    constructor (){
        super();
        this.state = {
            searchTerm: '',
            queryTerm: ''
        }
    }
    componentDidMount(Props){
        console.log(this.props.match.params.term);
    }

    render(){
        
        return (
            <div className="photo-area"> 
             {
                (this.state.isLoading) ? <Loading/> : ''
            } 
            <h3><a href="/">Click Here</a> to go back to the main page</h3>
            <DataFetcher subject={this.props.match.params.term}/>
           </div>
        )
    }       
}

export default UrlSearch;