import React, { Component } from 'react';
import axios from 'axios';
import apikey from './config.js';
import SearchForm from './components/SearchForm';
import NoPics from './NoPics';
import Loading from 'react-loading-animation';


class Search extends Component {
    constructor (){
        super();
        this.state = {
            img: [],
            urlTerm: '',
            noResults: false,
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
    handleUrl = () => {
        this.setState({
            urlTerm: this.term
        })
        this.handleUrlSearch();
    }

    handleUrlSearch = () => {
        this.setState({
            searchString: this.state.urlTerm
        })
        this.handleSearchInput()
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
            img: [],
            isLoading: false
        })
    }
    handleTextInput = e => {
        this.setState({ searchString: e.target.value });
    
      }
      handleSearchInput = searchTerm => {
        this.setState({
            isLoading: true
        })
        var pageNum = Math.floor(Math.random() * 20);
        axios({ 
          method: 'GET',
          url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+apikey+'&tags='+this.state.searchString+'&per_page=6&page='+pageNum+'&format=json&nojsoncallback=1',
          header: {
            'Access-Control-Allow-Origin': 'http://localhost:3000'| '*'
          }
        })
        .then((response)=> {
          var counter = 0;

          if(response.data.stat !== 'fail'){
            if(parseInt(response.data.photos.total, 10) <= 10){
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
            else{
                this.setState({
                    noResults: false
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
            <SearchForm
            searchTerm={this.state.searchTerm}
            handleOnClick={this.handleSearchInput}
            handleTextInput={this.handleTextInput}
                />
                {this.pics}
            {
                (this.state.noResults === true) ?
                <NoPics/> : ''
            }
            
              
            <div className="row ">
            <div className="col-md-3">
           <img src={this.state.img1} className="img-from-api one" alt=''/>
           <img src={this.state.img2} className="img-from-api two" alt=''/>
           </div>
           <div className="col-md-4">
           <img src={this.state.img3} className="img-from-api three" alt=''/>
           <img src={this.state.img4} className="img-from-api four" alt=''/>
           </div>
           <div className="col-md-4">
           <img src={this.state.img5} className="img-from-api five" alt=''/>
           <img src={this.state.img6} className="img-from-api six" alt=''/>
            </div>
           </div>
           </div>
        )
    }       
}

export default Search;