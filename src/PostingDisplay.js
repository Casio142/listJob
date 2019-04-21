import React from 'react';
import JobCard from './JobCard';

const PostingDisplay = (props) =>{
    const jobPosts = props.posts.map(post =>{
        return(
          <JobCard clickAction={props.jobClick} how_to_apply={post.how_to_apply} company={post.company} description={post.description} title={post.title} location={post.location} type={post.type}key={Math.random()} />
        )
      });

    return (
        <div>
            <div className = "btnArrayContainer container">
                <div className="row">
                    <button className="moreBtn btnSize hvr-sweep-to-right col-sm-4" onClick={props.clickAddAction}>{props.moreBtnLabel}</button>
                    <button className="resetBtn btnSize hvr-sweep-to-right col-sm-4" onClick={props.clickResetAction}>{props.resetBtnLabel}</button>
                    <button className="filterBtn btnSize hvr-sweep-to-right col-sm-4" >JOB FILTER</button>
                </div>
            </div>

            <div className="container marginBtm">
                <div className="row">
                    {jobPosts}
                </div>
            </div>

            
        </div>
    )
}

export default PostingDisplay;