
import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h2 className='newHeader'>NewsCollection- Top Heading.</h2>
        <NewsComponent />
      </div>
    );
  }
}

