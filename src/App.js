import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';

export default class App extends Component {
  render() {

    let newsData = {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "barrons.com",
      "title": "Stock Market News: S&P 500, Nasdaq Head for 7th Consecutive Gains; Dow set to Open Up; Nasdaq, Walmart, Tesla, More Movers",
      "description": "LIVE UPDATES\nStock Market News: Dow Set to Open Up\nS&P 500 and Nasdaq Futures are also rising in premarket trading Friday.\nLast Updated:\nAug. 16, 2024 at 3:25 AM EDT\nWhat to Watch Today\nU.S. stock futures are rising, chasing another day of gains on Friday ami…",
      "url": "https://biztoc.com/x/0410227b4b9c96c6",
      "urlToImage": "https://itc.ua/wp-content/uploads/2024/08/PXL_20240809_195006186.jpg",
      "publishedAt": "2024-08-16T07:27:48Z",
      "content": "LIVE UPDATESStock Market News: Dow Set to Open UpS&amp;P 500 and Nasdaq Futures are also rising in premarket trading Friday.Last Updated:Aug. 16, 2024 at 3:25 AM EDTWhat to Watch TodayU.S. stock futu… [+129 chars]"
    };

    return (
      <div>
        <Navbar />
        <div className='newsTemplate'>
          <NewsComponent newsData={newsData} />
          <NewsComponent newsData={newsData} />
          <NewsComponent newsData={newsData} />
          <NewsComponent newsData={newsData} />
          <NewsComponent newsData={newsData} />
          <NewsComponent newsData={newsData} />
        </div>
      </div>
    );
  }
}

