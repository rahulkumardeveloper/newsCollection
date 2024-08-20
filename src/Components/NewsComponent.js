import React, { Component } from 'react';
import NewsItem from './NewsItem';
import IsLoading
  from './IsLoading';

export default class NewsComponent extends Component {
  state = {
    articles: [],
    isLoading: true,
    page: 1,
    totalPageNumber: 0
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d81283e788b4211a61f8b8a25597554&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: 1,
      totalPageNumber: Math.ceil(parseData.totalResults / this.props.pageSize),
      isLoading: false
    })
  }
  onPrevClick = async () => {
    this.setState({
      isLoading: true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d81283e788b4211a61f8b8a25597554&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log("parseData", parseData)
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      isLoading: false
    })
  }

  onNextClick = async () => {
    this.setState({
      isLoading: true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d81283e788b4211a61f8b8a25597554&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page + 1,
      isLoading: false
    })
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="p-2"> <h3>NewsCollection- Top Heading...</h3></div>
            <div className="p-2">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
        {this.state.isLoading &&
          <IsLoading />
        }
        <div className='newsTemplate container'>
          {!this.state.isLoading && this.state.articles.map((element) => {
            return <div key={element.url}>
              < NewsItem title={element.title ? element.title.slice(0, 30) : 'In Api Title Not Exit'}
                description={element.description ? element.description.slice(0, 40) : 'In Api Description Not Exit'}
                urlToImage={element.urlToImage ? element.urlToImage : 'https://ih1.redbubble.net/image.1861329778.2941/st,small,845x845-pad,1000x1000,f8f8f8.jpg'} url={element.url} />
            </div>
          })
          }
        </div>
        <div className="paginationBtn container">
          <button disabled={this.state.page <= 1} type="button" className='btn btn-dark prevBtn' onClick={this.onPrevClick}>&larr;Prev</button>
          <button disabled={this.state.page === this.state.totalPageNumber} type="button" className='btn btn-dark nextBtn' onClick={this.onNextClick}>Next&rarr;</button>
        </div>
      </>
    );
  }
}
