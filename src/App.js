import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GreetPage from './GreetPage';
import PostingDisplay from './PostingDisplay';
import PopupWindow from './PopupWindow';
import NavBar from './NavBar';

class App extends Component {
 // <div dangerouslySetInnerHTML={{ __html: post.description }}/>

  constructor(props){

    super(props);
    this.state = {
    posts: [],
    pageNumber: 1,
    togglePopup: false,
    displaySaveToggle: false,
    savedPost: [],
    activeNav: 0,
    loading: false
  }
    this.addMore = this.addMore.bind(this);
    this.resetListing = this.resetListing.bind(this);
    this.expandPostCard = this.expandPostCard.bind(this);
    this.savePost = this.savePost.bind(this);
    this.displaySaved = this.displaySaved.bind(this);
    this.navToggle = this.navToggle.bind(this);
    this.loadingScreen = this.loadingScreen.bind(this);
    this.displayJobPill = this.displayJobPill.bind(this);
  }
  
  /*
   Func Name: addMore
   Purpose: Retrieve all the job listings with no filter from the API
   */
   addMore(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = proxyurl + "//jobs.github.com/positions.json?page="+this.state.pageNumber+"&utf8=%E2%9C%93&description=&location=";
    axios.get(url,this.loadingScreen()) 
      .then(res => {
        this.setState(
          {
            posts : [...this.state.posts,...res.data],
            pageNumber : this.state.pageNumber + 1,
            togglePopup : false,
            popWindowInfo: null,
            loading: !this.state.loading
                    }
        )
      })  
   }

   loadingScreen(){
     this.setState({
       loading: !this.state.loading,
       activeNav:1
     })

   }

   navToggle(pill, action = null){
      if(pill !== this.state.activeNav){
        this.setState({
          activeNav: pill
        })
      }
      action();
   }

   displayJobPill(){
     this.setState({
       displaySaveToggle: !this.state.displaySaveToggle
     })
   }

   expandPostCard(card){

    this.setState({
      togglePopup: !this.state.togglePopup,
      popWindowInfo: card 

    })
    
    if(this.state.togglePopup === false){
      console.log("the change");
      document.getElementById('body').style.overflowY = "hidden";
      document.getElementById('html').style.overflow = "hidden";


     }
    else{
      console.log("the scroll");
      document.getElementById('body').style.overflowY= "scroll"; 
      document.getElementById('html').style.overflow = "scroll";

    }



   }

   savePost(post){
     this.setState({
       savedPost: [...this.state.savedPost, post]
     })
   }

   displaySaved(){
     this.setState(
       {
         displaySaveToggle: !this.state.displaySaveToggle
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
         pageNumber: 1,
         displaySaveToggle: false       }
     )
   }

  render() {
    const {posts,togglePopup} = this.state;
    var postings = <GreetPage message="NEED A JOB?" btnLabel="DISPLAY POSTINGS" displayPost={() => this.navToggle(1,this.addMore)} loading={this.state.loading}/>;
    var navDisplay = null;
    var popUp = null;
    var loading = null;

    if(this.state.posts.length > 0){
      navDisplay =  <NavBar navStatus={this.state.activeNav} expandPostCard={() => this.navToggle(1, this.displayJobPill)} resetClick = {() => this.navToggle(1,this.resetListing)} />
      postings = <PostingDisplay displaySaveToggle={this.displaySaved} saved={this.state.savedPost} displaySave={this.state.displaySaveToggle} expandPostCard={this.expandPostCard} loading={this.state.loading} posts= {posts} clickAddAction={this.addMore} clickResetAction={this.resetListing} moreBtnLabel="MORE JOB POSTINGS" resetBtnLabel="ERASE ALL LISTINGS"/>
    }

    if(togglePopup){
       popUp = <PopupWindow saveClick={this.savePost} toggle={this.expandPostCard} data = {this.state.popWindowInfo}/>
    }


    return (
      <div className="App">

          {navDisplay}        
        <div className="app-shield">
          {loading}
          {popUp}
          {postings}
          
        </div>  
      </div>
    );
  }
}

export default App;
