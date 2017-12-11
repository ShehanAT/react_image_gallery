import React, { Component } from 'react';
import axios from 'axios';
import apikey from './config.js';
import NoPics from './NoPics';
import Loading from 'react-loading-animation';


class UrlSearch extends Component {
    constructor (){
        super();
        this.state = {
            img: [],
            urlTerm: '',
            noResults: true,
            searchString: '',
            isLoading: false,
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            img5: '',
            img6: ''
        }
    }
    
    componentDidMount(){
        
        this.handleUrlSearch();
    }
   

    handleUrlSearch = () => {
        //console.log(match.params.term);
        console.log(this.state.searchString);
        
        this.handleSearchInput();
    }

    handleShowImages = () =>{
        this.setState({
            img1: this.state.img[0].url,
            img2: this.state.img[1].url,
            img3: this.state.img[2].url,
            img4: this.state.img[3].url,
            img5: this.state.img[4].url,
            img6: this.state.img[5].url
        })
        this.handleEraseResults();
    }
    handleEraseResults = () => {
        this.setState({
            img: []
        })
    }
      handleSearchInput = searchTerm => {
        this.setState({
     
            isLoading: true
        })
        var pageNum = Math.floor(Math.random() * 20);
        axios({ 
          method: 'GET',
          url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+apikey+'&tags='+this.props.match.params.term+'&per_page=6&page='+pageNum+'&format=json&nojsoncallback=1',
          header: {
            'Access-Control-Allow-Origin': 'http://localhost:3000'| '*'
          }
        })
        .then((response)=> {
          var counter = 0;
          if(response.data.photos.photo.length > 0){
            this.setState({
                noResults: false,
                isLoading: false
            })   
            for ( var i = 0 ; i < 6 ; i++){
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
          }
          else{
              this.setState({
                noResults: true,
                isLoading: false,
                img1: '',
                img2: '',
                img3: '',
                img4: '',
                img5: '',
                img6: ''
            })
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
             {
                (this.state.isLoading) ? <Loading/> : ''
            } 
            <h3><a href="/">Click Here</a> to go back to the main page</h3>
            {
                (this.state.img1 === '') ? 
                <NoPics/> : ''
            }
             <div className="row ">
            <div className="col-md-3">
           <img src={this.state.img1} alt='' className="img-from-api one"/>
           <img src={this.state.img2} alt='' className="img-from-api two"/>
           </div>
           <div className="col-md-3">
           <img src={this.state.img3} alt='' className="img-from-api three"/>
           <img src={this.state.img4} alt='' className="img-from-api four"/>
           </div>
           <div className="col-md-3">
           <img src={this.state.img5} alt='' className="img-from-api five"/>
           <img src={this.state.img6} alt='' className="img-from-api six"/>
           </div>
           </div>
           </div>
        )
    }       
}

export default UrlSearch;