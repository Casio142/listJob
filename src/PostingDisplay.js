import React from 'react';
import JobCard from './JobCard';


const PostingDisplay = (props) =>{

    var jobPosts = null;

    var btnContainer = <div className = "btnArrayContainer container">
                        <div className="row">
                            <button className="moreBtn btnSize hvr-sweep-to-right col-sm-12" onClick={props.clickAddAction}>{props.loading? <div class="spinner-border text-light" role="status">
                        <span class="sr-only">Loading...</span>
                    </div> :props.moreBtnLabel}</button>
                        </div>
                    </div>

    /* Check to display the saved listings */
    if(props.displaySave){

        if(props.saved.length > 0){
           jobPosts = props.saved.map(post =>{
            return(
              <JobCard clickAction={props.expandPostCard} how_to_apply={post.how_to_apply} company={post.company} description={post.description} title={post.title} location={post.location} type={post.type}key={Math.random()} />
            )
          }); 
        } else{
            jobPosts=<div className="emptySavedList"><div className="divLine"/><p>NO LISTINGS ARE SAVED</p><div className="divLine"/></div>
        }

        btnContainer = null;

    }
    else{

        jobPosts = props.posts.map(post =>{
            return(
            <JobCard clickAction={props.expandPostCard} how_to_apply={post.how_to_apply} company={post.company} description={post.description} title={post.title} location={post.location} type={post.type}key={Math.random()} />
            )
        });
    }

    return (
        <div>
            

            <div className="container marginBtm">
                <div className="row">
                    {jobPosts}
                </div>
            </div>
            
            {btnContainer}

            
        </div>
    )
}

export default PostingDisplay;