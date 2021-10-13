import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

// import PropTypes from "prop-types";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  // articles = [
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     description:
  //       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     publishedAt: "2020-04-27T11:41:47Z",
  //     content:
  //       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     description:
  //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     publishedAt: "2020-03-30T15:26:05Z",
  //     content:
  //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //   },
  // ];
  // static defaultProps = {
  //   country: "in",
  //   pageSize: 8,
  //   category: "general",
  // };
  // static PropTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };
  const capitalize_First_letter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const UpdateNews = async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);
    // console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  }
  useEffect(() => {
    document.title = `${capitalize_First_letter(props.category)} - NewsMonkey`;
    UpdateNews();
    
  }, [])
  // async componentDidMount() {
    // console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=676b3d48cdf043a9b520dc700f1e4cd5&page=1&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    // this.UpdateNews();
  // }
  const handlePrevClick = async () => {
    // console.log("Prev");
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&category=${
    //   props.category
    // }&apiKey=676b3d48cdf043a9b520dc700f1e4cd5&page=${
    //   this.state.page - 1
    // }&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
    // this.setState({ page: this.state.page - 1 });
    setPage(page-1);
    UpdateNews();
  };

  const handleNextClick = async () => {
    // console.log("next");
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / props.pageSize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     props.country
    //   }&category=${
    //     props.category
    //   }&apiKey=676b3d48cdf043a9b520dc700f1e4cd5&page=${
    //     this.state.page + 1
    //   }&pageSize=${props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   // console.log(parsedData);
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }
    // this.setState({ page: this.state.page + 1 });
    setPage(page-1);
    UpdateNews();
  };
  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 });
    // this.UpdateNews();
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);    
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
  };
  
    return (
      <>
      {/* <div className="container my-3"> */}
        <h1 className="text-center" style={{ margin: "30px 0", marginTop: '90px'}}>
          NewsMonkey - Top Headlines on{" "}
          {capitalize_First_letter(props.category)} category
        </h1>
        {/* <Spinner/> */}
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {/* {!this.state.loading && */}
              {articles.map((element) => {
                return (
                  <div className="col-md-4 " key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : " "}
                      description={
                        element.description
                          ? element.description.slice(0, 90)
                          : " "
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      {/* </div> */}
      </>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
}

News.propTypes = {
  country: "in",
  pageSize: 8,
  category: "general",
}

export default News;

// https://docs.google.com/spreadsheets/d/17fUCWmHU5d0iMgSS6zZJc5ZXlIEnPCLZCoxE8_f57Gw/edit#gid=1878085076
