import React, { Component } from 'react';
import './App.css';
import Image from './components/Image'

export default class App extends Component{
  render(){
    return (
      <div className="App">
        <Image img ={'https://i.kym-cdn.com/photos/images/facebook/001/888/474/48b'}/>
      </div>
    );

  }
};