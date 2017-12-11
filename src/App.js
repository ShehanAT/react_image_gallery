import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Search from './Search';
import axios from 'axios';
import apikey from './config.js';
import 'bootstrap/dist/css/bootstrap.css';
import Cats from './Cats';
import Dogs from './Dogs';
import Sunsets from './Sunsets';
import MainContent from './MainContent';
import error from './error';
import UrlSearch from './UrlSearch';



// App components
export default class App extends Component {
  constructor (){
    super();
    this.state = {
        isLoading: true,
        CatButton: false,
        DogButton: false,
        SunsetButton: false
    }
}
componentWillMount(){
 
}
  handleCatPage = () => {
    this.setState({
      CatButton: true,
      DogButton: false,
      SunsetButton: false
    })

  }
  handleDogPage = () => {
    this.setState({
      CatButton: false,
      DogButton: true,
      SunsetButton: false
    })
  }
  handleSunsetPage = () => {
    this.setState({
      CatButton: false,
      DogButton: false,
      SunsetButton: true
    })
  }
  handleCatPhotos = x => {
    axios({
      method: 'GET',
      url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+apikey+'&tags=cats&per_page=10&page=1&format=json&nojsoncallback=1',
      header: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'| '*'
      }
    })
    .then((response) => {
      var counter = 0;
      for ( var i = 0 ; i < 10 ; i++){
        this.setState({ 
          catArr : [
            {
              url: `https://farm${response.data.photos.photo[i]['farm']}.staticflickr.com/${response.data.photos.photo[i]['server']}/${response.data.photos.photo[i]['id']}_${response.data.photos.photo[i]['secret']}.jpg`,
              id: counter
            },
            ...this.state.catArr
          ]
          
         });
         counter++;
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }


  render() {
    
    //console.log(`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`)
    return (
    <BrowserRouter>
      <div className="App">   
        <Header 
          logo={logo}/>
          <Switch>
            <Route exact path='/' component={MainContent}/>
            <Route exact path='/cats' component={Cats}/>
            <Route exact path='/dogs' component={Dogs}/>
            <Route exact path='/sunsets' component={Sunsets}/>
            <Route exact path='/search' component={Search}/>
          
            <Route path='/:term'component={UrlSearch}/>
            <Route component={error}/>
          </Switch>
       </div>
      
      </BrowserRouter>

    );
  }
}


