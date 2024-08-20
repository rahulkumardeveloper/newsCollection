
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
        <NewsComponent pageSize={this.pageSize} country={'in'} category={'business'} />
      </div>
    );
  }
}

