import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class NewsComponent extends Component {
  state = {
    articles: [],
    isLoading: false
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7d81283e788b4211a61f8b8a25597554"
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      articles: parseData.articles
    })
  }

  render() {
    return (
      <div className='newsTemplate'>
        {this.state.articles.map((element) => {
          return <div key={element.url}>
            < NewsItem title={element.title.slice(0, 30)} description={element.description.slice(0, 40)} urlToImage={element.urlToImage} url={element.url} />
          </div>
        })
        }
      </div>
    );
  }
}
