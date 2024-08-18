import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class NewsComponent extends Component {
  state = {
    articles: [],
    isLoading: false,
    page: 1,
    pageSize: 4
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7d81283e788b4211a61f8b8a25597554&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    this.setState({
      articles: parseData.articles,
      page: 1,
      pageSize: 4
    })
  }
  onPrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7d81283e788b4211a61f8b8a25597554&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
    })
  }

  onNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7d81283e788b4211a61f8b8a25597554&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page + 1,
    })
  }
  render() {
    return (
      <>
        <div className='newsTemplate container'>
          {this.state.articles.map((element) => {
            return <div key={element.url}>
              < NewsItem title={element.title.slice(0, 30)} description={element.description.slice(0, 40)} urlToImage={element.urlToImage} url={element.url} />
            </div>
          })
          }
        </div>
        <div className="paginationBtn container">
          <button disabled={this.state.page <= 1} type="button" className='btn btn-dark prevBtn' onClick={this.onPrevClick}>&larr;Prev</button>
          <button type="button" className='btn btn-dark nextBtn' onClick={this.onNextClick}>Next&rarr;</button>
        </div>
      </>
    );
  }
}
