import React, { Component } from 'react';

export default class NewsComponent extends Component {
  render() {
    const { title, description, urlToImage } = this.props.newsData;
    return (
      <div>
        <div className="card text-center m-3" style={{ width: '18rem' }}>
          <img src={urlToImage} class="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
