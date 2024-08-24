
import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 8;
  state = {
    topLoaderBar: 3
  }
  updateTopLoader = (loaderValue) => {
    this.setState({
      topLoaderBar: loaderValue
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            color='#f11946'
            progress={this.state.topLoaderBar}
          />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <NewsComponent updateTopLoader={this.updateTopLoader} key='general' pageSize={this.pageSize} country='in' category='general' />}
            />
            <Route path="/general" element={
              <NewsComponent updateTopLoader={this.updateTopLoader} pageSize={this.pageSize} country='in' category='general' />
            } />
            <Route path="/business" element={
              <NewsComponent updateTopLoader={this.updateTopLoader} key='business' pageSize={this.pageSize} country='in' category='business' />
            } />
            <Route path="/entertainment" element={
              <NewsComponent updateTopLoader={this.updateTopLoader} key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' />
            } />
            <Route path="/health" element={
              <NewsComponent updateTopLoader={this.updateTopLoader} key='health' pageSize={this.pageSize} country='in' category='health' />
            } />
            <Route path="/science" element={
              <NewsComponent updateTopLoader={this.updateTopLoader} key='science' pageSize={this.pageSize} country='in' category='science' />
            } />
            <Route path="/sports" element={
              <NewsComponent updateTopLoader={this.updateTopLoader} key='sports' pageSize={this.pageSize} country='in' category='sports' />
            } />
            <Route path="/technology" element={
              <NewsComponent updateTopLoader={this.updateTopLoader} key='technology' pageSize={this.pageSize} country='in' category='technology' />
            } />
          </Routes>
        </BrowserRouter >
      </div>
    );
  }
}