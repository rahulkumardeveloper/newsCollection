
import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>NewsCollection- Top Heading.</h2>
        </div>
        <NewsComponent />
      </div>
    );
  }
}

