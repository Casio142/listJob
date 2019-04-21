import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GreetPage from './GreetPage';
import PostingDisplay from './PostingDisplay';
import PopupWindow from './PopupWindow';

class App extends Component {
 // <div dangerouslySetInnerHTML={{ __html: post.description }}/>

  constructor(props){

    super(props);
    this.state = {
    posts: [],
    pageNumber: 1,
    togglePopup: false}
    this.addMore = this.addMore.bind(this);
    this.resetListing = this.resetListing.bind(this);
    this.jobClick = this.jobClick.bind(this);
  }
  
  /*
   Func Name: addMore
   Purpose: Retrieve all the job listings with no filter from the API
   */
   addMore(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = proxyurl + "//jobs.github.com/positions.json?page="+this.state.pageNumber+"&utf8=%E2%9C%93&description=&location=";
    axios.get(url, {onDownloadProgress: function(){
    }}) 
      .then(res => {
        this.setState(
          {
            posts : [...this.state.posts,...res.data],
            pageNumber : this.state.pageNumber + 1,
            togglePopup : false,
            popWindowInfo: null
          }
        )
        console.log(res);
      })  
   }

   jobClick(card){
    this.setState({
      togglePopup: !this.state.togglePopup,
      popWindowInfo: card 

    })
     console.log("the job click shit");
   }

   closePopup(){
     this.setState(
       {
         togglePopup: false
       }
     )
   }

   /*
   Func Name: resetListing
   Purpose: Erase all the listing that are displayed
   */
   resetListing(){
     this.setState(
       {
         posts: [],
         pageNumber: 1
       }
     )
   }

  render() {
    const {posts,togglePopup} = this.state;
    var postings = <GreetPage message="NEED A JOB?" btnLabel="CLICK TO SEE SOFTWARE JOB POSTINGS" clickAction={this.addMore}/>;
    if(togglePopup){
      var popUp = <PopupWindow toggle={this.jobClick} data = {this.state.popWindowInfo}/>
    }
    else{
      popUp = null;
    }
    if(posts.length > 0){
      postings = (<PostingDisplay jobClick={this.jobClick} posts= {posts} clickAddAction={this.addMore} clickResetAction={this.resetListing} moreBtnLabel="MORE JOB POSTINGS" resetBtnLabel="ERASE ALL LISTINGS"/>)
    }
    
    return (
      <div className="App">
        <div className="app-shield">
          {popUp}
          {postings}
        </div>  
      </div>
    );
  }
}

export default App;
