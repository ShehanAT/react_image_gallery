import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import apikey from './config.js';
import Loading from 'react-loading-animation';
import 'bootstrap/dist/css/bootstrap.css';
import Cats from './Cats';
import Dogs from './Dogs';
import Sunsets from './Sunsets';
import MainContent from './MainContent';
import error from './error';
import UrlSearch from './UrlSearch';

class DataFetcher extends Component {
    constructor (){
        super();
        this.state = {
            img: [],
            searchString: '',
            isLoading: true,
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            img5: '',
            img6: '',
            img7: '',
            img8: '',
            img9: ''
        }
    }
    componentDidMount(Props){
        this.handlePhotos(this.props.subject);

    }
    handleSearchTerm(req, res, next){
       console.log(req);
    }
    
   
    handleShowImages = (props) =>{
        this.setState({
            img1: this.state.img[0].url,
            img2: this.state.img[1].url,
            img3: this.state.img[2].url,
            img4: this.state.img[3].url,
            img5: this.state.img[4].url,
            img6: this.state.img[5].url,
            img7: this.state.img[6].url,
            img8: this.state.img[7].url,
            img9: this.state.img[8].url
        })
        this.handleEraseResults();
    }
    handleEraseResults = () => {
        this.setState({
            img: [],
            isLoading: false
        })
    }
      handlePhotos = searchTerm => {
        console.log(searchTerm);
        var pageNum = Math.floor(Math.random() * 20);
        axios({ 
          method: 'GET',
          url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+apikey+'&tags='+searchTerm+'&per_page=9&page='+pageNum+'&format=json&nojsoncallback=1',
          header: {
            'Access-Control-Allow-Origin': 'http://localhost:3000'| '*'
          }
        })
        .then((response)=> {
          var counter = 0;
          for ( var i = 0 ; i < 9 ; i++){
            this.setState({ 
              img : [
                {
                  url: `https://farm${response.data.photos.photo[i]['farm']}.staticflickr.com/${response.data.photos.photo[i]['server']}/${response.data.photos.photo[i]['id']}_${response.data.photos.photo[i]['secret']}.jpg`,
                  id: counter
                },
                ...this.state.img
              ]
             });
             counter++;
          }
        
           console.log(this.state.img);
           this.handleShowImages();
      })
      .catch((err) => {
          console.log(err);
      })   
}
render(){
    return (
        <div className="photo-area">  
        <div className="row">
        {(this.state.isLoading) ? <Loading/> : ''}
        <div className="col-md-4">
       <img src={this.state.img1} alt='' className="img-from-api main-one"/>
       <img src={this.state.img2} alt='' className="img-from-api main-two"/>
       <img src={this.state.img3} alt='' className="img-from-api main-three"/>
       </div>
       <div className="col-md-4">
       <img src={this.state.img4} alt='' className="img-from-api main-four"/>
       <img src={this.state.img5} alt='' className="img-from-api main-five"/>
       <img src={this.state.img6} alt='' className="img-from-api main-six"/>
       </div>
       <div className="col-md-4">
       <img src={this.state.img7} alt='' className="img-from-api main-seven"/>
       <img src={this.state.img8} alt='' className="img-from-api main-eight"/>
       <img src={this.state.img9} alt='' className="img-from-api main-nine"/>
       </div>
       </div>
       </div>
    )}
}

export default DataFetcher;