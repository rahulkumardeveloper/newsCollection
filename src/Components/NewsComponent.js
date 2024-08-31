// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// import IsLoading
//   from './IsLoading';
// import InfiniteScroll from 'react-infinite-scroll-component';

// export default class NewsComponent extends Component {

//   constructor(props) {
//     super();
//     document.title = `${props.category} - News Collection`;
//   }
//   parseData = [];
//   state = {
//     articles: [],
//     isLoading: true,
//     page: 1,
//     totalPageNumber: 0,
//   }
//   updateNews = async () => {
//     this.props.updateTopLoader(10);
//     this.setState({
//       isLoading: true
//     })
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d81283e788b4211a61f8b8a25597554&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parseData = await data.json();
//     this.props.updateTopLoader(50);

//     this.setState({
//       articles: parseData.articles,
//       isLoading: false
//     })
//     this.props.updateTopLoader(100);

//   }
//   async componentDidMount() {
//     this.updateNews();
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d81283e788b4211a61f8b8a25597554&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     // let data = await fetch(url);
//     // this.parseData = await data.json();
//     // this.setState({
//     //   articles: this.parseData.articles,
//     //   isLoading: false
//     // })
//   }
//   onPrevClick = async () => {
//     this.setState({
//       page: this.state.page - 1,
//     })
//     this.updateNews();
//   }

//   onNextClick = async () => {
//     this.setState({
//       page: this.state.page + 1,
//     })
//     this.updateNews();
//   }
//   onKeyUp = (event) => {
//     let inputData = event.target.value;
//     let filterData = this.parseData.articles.filter((element) => { return element.title.toLowerCase().includes(inputData) });
//     this.setState({
//       articles: filterData,
//     })
//   }
//   fetchMoreData = async () => {
//     this.setState({
//       page: this.state.page + 1
//     });
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d81283e788b4211a61f8b8a25597554&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parseData = await data.json();
//     setTimeout(() => {
//       this.setState({
//         articles: this.state.articles.concat(parseData.articles),
//       })
//     }, 500)
//   };
//   render() {
//     return (
//       <>
//         {/* top heading section */}
//         <div className="container">
//           <div className="row">
//             <div className="d-flex justify-content-between">
//               <div className="p-2"> <h4>NewsCollection - Top {this.props.category} Heading..  </h4></div>
//               <div className="p-2">
//                 <form className="d-flex" role="search">
//                   <input className="form-control me-2" type="search" placeholder="Search by title" ref='enterTitle' onKeyUp={this.onKeyUp} aria-label="Search" />
//                 </form>
//               </div>
//             </div>
//             {this.state.isLoading &&
//               <IsLoading />
//             }
//             {/* infinite Scroll bar technique */}
//             <InfiniteScroll
//               dataLength={this.state.articles.length} //This is important field to render the next data
//               next={this.fetchMoreData}
//               hasMore={this.state.articles.length !== this.state.totalPageNumber}
//               loader={<IsLoading />}
//               style={{ overflow: "none" }}
//             >

//               {/* infinite Scroll bar technique */}
//               {/* spinner section */}
//               {/* {this.state.isLoading &&
//           <IsLoading />
//         } */}
//               <div className='container'>
//                 <div className='row'>
//                   {/* {!this.state.isLoading && */}
//                   {this.state.articles.map((element) => {
//                     return <div key={element.url} className='col-12 col-sm-6 col-md-4 col-lg-3'>
//                       < NewsItem source={element.source.name} title={element.title ? element.title.slice(0, 30) : 'In Api Title Not Exit'} time={element.publishedAt} author={element.author ? element.author : 'Unknow'}
//                         description={element.description ? element.description.slice(0, 50) : 'In Api Description Not Exit'}
//                         urlToImage={element.urlToImage ? element.urlToImage : 'https://ih1.redbubble.net/image.1861329778.2941/st,small,845x845-pad,1000x1000,f8f8f8.jpg'} url={element.url} />
//                     </div>
//                   })
//                   }
//                 </div>
//               </div>

//             </InfiniteScroll>
//             {/* <div className="paginationBtn container">
//           <button disabled={this.state.page <= 1} type="button" className='btn btn-dark prevBtn' onClick={this.onPrevClick}>&larr;Prev</button>
//           <button disabled={this.state.page === this.state.totalPageNumber} type="button" className='btn btn-dark nextBtn' onClick={this.onNextClick}>Next&rarr;</button>
//         </div> */}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
import React from 'react';
import NewsItem from './NewsItem';
import IsLoading
  from './IsLoading';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { useEffect } from 'react';

const NewsComponent = (props) => {


  const parseData = [];
  const [articles, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPageNumber, settotalPageNumber] = useState(0);
  document.title = `${props.category} - News Collection`;

  const updateNews = async () => {
    props.updateTopLoader(10);
    setIsLoading({
      isLoading: true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7d81283e788b4211a61f8b8a25597554&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);

    props.updateTopLoader(50);

    setArticle({ articles: parseData.articles })
    setIsLoading({ isLoading: false });
    settotalPageNumber({
      totalPageNumber: parseData.totalResults
    })
    props.updateTopLoader(100);
  }
  useEffect(() => {
    updateNews();

  });

  const onKeyUp = (event) => {
    let inputData = event.target.value;
    let filterData = parseData.articles.filter((element) => { return element.title.toLowerCase().includes(inputData) });
    setArticle({
      articles: filterData,
    })
  }
  const fetchMoreData = async () => {
    setPage({
      page: page + 1
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=7d81283e788b4211a61f8b8a25597554&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setTimeout(() => {
      setArticle({
        articles: articles.concat(parseData.articles),
      })
    }, 500)
  };

  return (
    <>
      {/* top heading section */}
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="p-2"> <h4>NewsCollection - Top {props.category} Heading..  </h4></div>
            <div className="p-2">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search by title" onKeyUp={onKeyUp} aria-label="Search" />
              </form>
            </div>
          </div>
          {isLoading &&
            <IsLoading />
          }
          {/* infinite Scroll bar technique */}
          <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={articles.length !== totalPageNumber}
            loader={<IsLoading />}
            style={{ overflow: "none" }}
          >

            <div className='container'>
              <div className='row'>
                {/* {!this.state.isLoading && */}
                {articles.map((element) => {
                  return <div key={element.url} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                    < NewsItem source={element.source.name} title={element.title ? element.title.slice(0, 30) : 'In Api Title Not Exit'} time={element.publishedAt} author={element.author ? element.author : 'Unknow'}
                      description={element.description ? element.description.slice(0, 50) : 'In Api Description Not Exit'}
                      urlToImage={element.urlToImage ? element.urlToImage : 'https://ih1.redbubble.net/image.1861329778.2941/st,small,845x845-pad,1000x1000,f8f8f8.jpg'} url={element.url} />
                  </div>
                })
                }
              </div>
            </div>

          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}
export default NewsComponent;