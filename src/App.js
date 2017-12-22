import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

import 'bootstrap/dist/css/bootstrap.css';
import Cats from './Cats';//importing default images component 
import Dogs from './Dogs';//importing default images component 
import Sunsets from './Sunsets';//importing default images component 
import MainContent from './MainContent';//importing main content component 
import error from './error';//importing error component
import UrlSearch from './UrlSearch';//importing url search component



// App components
export default class App extends Component {
  render() {
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
            <Route path='/search/:term'component={UrlSearch}/>
            <Route component={error}/>
          </Switch>
       </div>
      
      </BrowserRouter>

    );
  }
}


