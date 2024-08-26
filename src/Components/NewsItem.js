import React from 'react';

// export default class NewsItem extends Component {


//     render() {
//         const { title, description, urlToImage, url, time, author, source } = this.props;

//         return (
//             <div className='my-3'>

//                 <div className="card">
//                     <div className='badgeDesign'>
//                         <span className="badge rounded-pill bg-danger">
//                             {source}
//                         </span>
//                     </div>
//                     <img src={urlToImage} className="card-img-top" alt="urlto not coming in api" height="200px"></img>
//                     <div className="card-body">
//                         <h5 className="card-title">{title}...</h5>
//                         <p className="card-text">
//                             {description}...
//                         </p>
//                         <p className="card-text"><small className="text-danger">by{author} at {time}</small></p>
//                         <a href={url} rel="noreferrer" target='_blank' className="btn btn-dark">
//                             Read more...
//                         </a>
//                     </div>

//                 </div>
//             </div>
//         );
//     }
// }

const NewsItem = (props) => {

    const { title, description, urlToImage, url, time, author, source } = props;

    return (
        <div className='my-3'>

            <div className="card">
                <div className='badgeDesign'>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={urlToImage} className="card-img-top" alt="urlto not coming in api" height="200px"></img>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">
                        {description}...
                    </p>
                    <p className="card-text"><small className="text-danger">by{author} at {time}</small></p>
                    <a href={url} rel="noreferrer" target='_blank' className="btn btn-dark">
                        Read more...
                    </a>
                </div>

            </div>
        </div>
    );
}
export default NewsItem;
