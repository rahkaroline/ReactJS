import React, { Component } from 'react';
import Header from './components/Header';
import Routes from './routes';


class App extends Component{
  render(){
    return(
      <div>
          <Routes/>
      </div>
    );
  }
}

export default App;