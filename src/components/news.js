import React, { Component } from 'react'
import Newsitem from './newsitem'
import Proptypes from 'prop-types'
export class News extends Component {
  // 
    static defaultProps={
      category:"general",
      country:"in"
    }
    static propTypes={
      category:Proptypes.string,
      country:Proptypes.string
    }
  constructor(props){
    super(props);
    this.state={
      articles:[],
      page:1,
      Loading:false,
      
    }
    document.title=`${this.props.category}-news_Reader`
   }
  //   async componentDidMount(){
  //  console.log("hii")
  //   let url="https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=fb7742e801564dbf9122ac69aa7ecb0b"
  //  let data= await fetch(url)
  //  let parseddata=data.json();
  //  this.setState({ articles: parseddata.articles, loading: false });
  //  }
  async componentDidMount() {
    //console.log("Fetching news...");
    console.log(this.props.apikey)
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=9`;
      let data = await fetch(url);
      let parsedData = await data.json();
  
      // Check if articles exist before setting state
      if (parsedData && parsedData.articles) {
        this.setState({
          articles: parsedData.articles,
          totarticles:parsedData.totalResults,
          loading: false
        });
      } else {
        console.error("Invalid API response structure", parsedData);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }
  handleprev= async()=>{
   console.log("prev")
   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pagesize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    if (parsedData && parsedData.articles) {
      this.setState({
        articles: parsedData.articles,
        page:this.state.page-1
        //loading: false
      });
    } else {
      console.error("Invalid API response structure", parsedData);
    }
  }
  handlenext= async ()=>{
    console.log("prev")
    if(this.state.page+1>Math.ceil(this.state.totarticles/10)){
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pagesize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();
    if (parsedData && parsedData.articles) {
      this.setState({
        articles: parsedData.articles,
        page:this.state.page+1
        //loading: false
      });
    } else {
      console.error("Invalid API response structure", parsedData);
    }
  }
    //this.setState=({page:this.state.page+1})

   }
  render() {
    return (
      <div className='container my-3'>
       <h2 className="text-center mx-2" style={{ marginTop: "90px" }}>
  Top Headlines
</h2>

        <div className="row">
           
            {this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                   <Newsitem
                       title={element.title ? element.title.slice(0, 45) : ""}
                       description={element.description ? element.description.slice(0, 88) : ""}
                         imurl={element.urlToImage}
                         newsurl={element.url}
    />
  </div>
))}
         
        
        </div>
        <div className="conatiner d-flex justify-content-between">
        <button disabled={this.state.page<=1}type="button" class="btn btn-primary" onClick={this.handleprev}>Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totarticles/9)} type="button" class="btn btn-primary"onClick={this.handlenext}>Next</button>
        </div>
      </div>
    )
  }
}

export default News




