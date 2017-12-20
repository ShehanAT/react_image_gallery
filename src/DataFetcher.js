import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import apikey from './config.js';
import Loading from 'react-loading-animation';
import 'bootstrap/dist/css/bootstrap.css';

import NoPics from './NoPics';
//component that makes api calls to flickr
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
            img9: '',
            noPic: false
        }
    }
    componentDidMount(Props){//enables use with Cats, Dogs and Sunsets
        this.handlePhotos(this.props.subject);

    }
     componentWillReceiveProps(Props){//function that enables the use of Search and UrlSearch components with DataFetcher
        if (this.props.subject !== Props.subject ){
            this.handlePhotos(Props.subject)
        }
    }
    handleShowImages = (props) =>{//assigning the image holders to the image urls
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
    handleEraseResults = () => {//function that erases results of previous search 
        this.setState({
            isLoading: false
        })
    }
      handlePhotos = searchTerm => {//function that get the required photos from the flickr api 
        this.setState({
            isLoading: true
        })
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
         
          if (parseInt(response.data.photos.total, 10) <= 55){
              this.setState({
                  noPic: true,
                  isLoading: false
              })
          }
          else{
              this.setState({
                  noPic: false,
                  isLoading: false
              })
          }
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
        <div className='row'>
        {(this.state.isLoading) ? <Loading/> : this.state.img.map(function(player){
           return <img src={player.url} alt='pictures from flickr' key={player.id}className='img-from-api main-one'/>
       })}
       </div>
       {
           (this.state.noPic) ?
           <NoPics/>: ""
       }
       </div>
    )}
}

export default DataFetcher;
