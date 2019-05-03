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
    if(this.state.displaySaveToggle === true){
      this.displaySaved();
    }
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
      if(pill != this.state.activeNav){
        this.setState({
          activeNav: pill
        })
        if(action != null){
        action();}
      }
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
    var postings = <GreetPage message="NEED A JOB?" btnLabel="CLICK TO SEE SOFTWARE JOB POSTINGS" displayPost={() => this.navToggle(1)} displaySaveToggle={() => this.navToggle(2,this.displaySaved)}/>;
    var navDisplay = null;
    var popUp = null;
    var loading = null;

    //display the nav bar in certain instances
    if(this.state.activeNav != 0){
      navDisplay =  <NavBar navStatus={this.state.activeNav} expandPostCard={() => this.navToggle(1, this.displayJobPill)} saveClick = {() => this.navToggle(2,this.displaySaved)} trendClick ={() => this.navToggle(2,this.displaySaved)}/>
    }

    if(this.state.activeNav === 1){
      if(posts.length > 0){
        postings = <PostingDisplay displaySaveToggle={this.displaySaved} saved={this.state.savedPost} displaySave={this.state.displaySaveToggle} expandPostCard={this.expandPostCard} posts= {posts} clickAddAction={this.addMore} clickResetAction={this.resetListing} moreBtnLabel="MORE JOB POSTINGS" resetBtnLabel="ERASE ALL LISTINGS"/>
      }
      else{
        postings = <div className = "btnArrayContainer container">
        <div className="row">
            <button className="moreBtn btnSize hvr-sweep-to-right col-sm-12" onClick={this.addMore}>CLICK FOR JOB LISTINGS</button>
        </div>
      </div>
      }
    }

    else if(this.state.activeNav === 2){
      postings = <PostingDisplay displaySaveToggle={this.displaySaved} saved={this.state.savedPost} displaySave={this.state.displaySaveToggle} expandPostCard={this.expandPostCard} posts= {posts} clickAddAction={this.addMore} clickResetAction={this.resetListing} moreBtnLabel="MORE JOB POSTINGS" resetBtnLabel="ERASE ALL LISTINGS"/>
    }

    if(togglePopup){
      var popUp = <PopupWindow saveClick={this.savePost} toggle={this.expandPostCard} data = {this.state.popWindowInfo}/>
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
