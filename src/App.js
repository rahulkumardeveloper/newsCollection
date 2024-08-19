
import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';

export default class App extends Component {

  pageSize = 4;
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>NewsCollection- Top Heading.</h2>
        </div>
        <NewsComponent pageSize={this.pageSize} country={'in'} category={'business'} />
      </div>
    );
  }
}

