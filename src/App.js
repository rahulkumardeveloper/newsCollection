
import './App.css';

// import React, { Component, useState } from 'react';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {
//   pageSize = 8;
//   apiKey = process.env.apiKey;
//   state = {
//     topLoaderBar: 3
//   }
//   updateTopLoader = (loaderValue) => {
//     this.setState({
//       topLoaderBar: loaderValue
//     })
//   }

//   render() {

//     return (
//       <>
//         <BrowserRouter>
//           <LoadingBar
//             color='#f11946'
//             progress={this.state.topLoaderBar}
//           />
//           <Navbar />
//           <Routes>
//             <Route path="/" element={
//               <NewsComponent updateTopLoader={this.updateTopLoader} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country='in' category='general' />}
//             />
//             <Route path="/general" element={
//               <NewsComponent updateTopLoader={this.updateTopLoader} apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='general' />
//             } />
//             <Route path="/business" element={
//               <NewsComponent updateTopLoader={this.updateTopLoader} apiKey={this.apiKey} key='business' pageSize={this.pageSize} country='in' category='business' />
//             } />
//             <Route path="/entertainment" element={
//               <NewsComponent updateTopLoader={this.updateTopLoader} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' />
//             } />
//             <Route path="/health" element={
//               <NewsComponent updateTopLoader={this.updateTopLoader} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country='in' category='health' />
//             } />
//             <Route path="/science" element={
//               <NewsComponent updateTopLoader={this.updateTopLoader} apiKey={this.apiKey} key='science' pageSize={this.pageSize} country='in' category='science' />
//             } />
//             <Route path="/sports" element={
//               <NewsComponent updateTopLoader={this.updateTopLoader} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country='in' category='sports' />
//             } />
//             <Route path="/technology" element={
//               <NewsComponent updateTopLoader={this.updateTopLoader} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} country='in' category='technology' />
//             } />
//           </Routes>
//         </BrowserRouter >
//       </ >
//     );
//   }
// }
// functional component

const App = () => {
  let pageSize = 8;
  const [topLoaderBar, setState] = useState(3);

  const updateTopLoader = (loaderValue) => {
    setState({
      topLoaderBar: loaderValue
    })
  }

  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={topLoaderBar}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <NewsComponent updateTopLoader={updateTopLoader} pageSize={pageSize} country='in' category='general' />}
          />
          <Route path="/general" element={
            <NewsComponent updateTopLoader={updateTopLoader} key='general' pageSize={pageSize} country='in' category='general' />
          } />
          <Route path="/business" element={
            <NewsComponent updateTopLoader={updateTopLoader} key='business' pageSize={pageSize} country='in' category='business' />
          } />
          <Route path="/entertainment" element={
            <NewsComponent updateTopLoader={updateTopLoader} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />
          } />
          <Route path="/health" element={
            <NewsComponent updateTopLoader={updateTopLoader} key='health' pageSize={pageSize} country='in' category='health' />
          } />
          <Route path="/science" element={
            <NewsComponent updateTopLoader={updateTopLoader} key='science' pageSize={pageSize} country='in' category='science' />
          } />
          <Route path="/sports" element={
            <NewsComponent updateTopLoader={updateTopLoader} key='sports' pageSize={pageSize} country='in' category='sports' />
          } />
          <Route path="/technology" element={
            <NewsComponent updateTopLoader={updateTopLoader} key='technology' pageSize={pageSize} country='in' category='technology' />
          } />
        </Routes>
      </BrowserRouter >
    </ >
  );
}
export default App;