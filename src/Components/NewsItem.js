import React, { Component } from 'react';

export default class NewsItem extends Component {


    render() {
        const { title, description, urlToImage, url } = this.props;

        return (
            <div>
                <div className="card my-3" style={{ width: '18rem' }}>
                    <img src={urlToImage} className="card-img-top" alt="..." height="200px"></img>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">
                            {description}...
                        </p>
                        <a href={url} rel="noreferrer" target='_blank' className="btn btn-dark">
                            Read more...
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
