
import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 4;

  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={
                <NewsComponent key='general' pageSize={this.pageSize} country='in' category='general' />}
              />
              <Route path="/general" element={
                <NewsComponent key='general' pageSize={this.pageSize} country='in' category='general' />
              } />
              <Route path="/business" element={
                <NewsComponent key='business' pageSize={this.pageSize} country='in' category='business' />
              } />
              <Route path="/entertainment" element={
                <NewsComponent key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' />
              } />
              <Route path="/health" element={
                <NewsComponent key='health' pageSize={this.pageSize} country='in' category='health' />
              } />
              <Route path="/science" element={
                <NewsComponent key='science' pageSize={this.pageSize} country='in' category='science' />
              } />
              <Route path="/sports" element={
                <NewsComponent key='sports' pageSize={this.pageSize} country='in' category='sports' />
              } />
              <Route path="/technology" element={
                <NewsComponent key='technology' pageSize={this.pageSize} country='in' category='technology' />
              } />
            </Routes>
          </div>
        </BrowserRouter >
      </>
    );
  }
}