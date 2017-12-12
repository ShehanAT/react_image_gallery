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


