import React from 'react';
import './App.scss';

import Header from './components/header/header.jsx'
import Body from './components/body/body.jsx'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
