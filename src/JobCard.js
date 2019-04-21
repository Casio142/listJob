import React from 'react';


const JobCard = (props) => {

    return(
  
      <div onClick={()=>props.clickAction(props)} className = "hvr-grow col-lg-6 col-xl-4  cardMargin">
        <div className="jobCard col-sm-12 ">
          <p className="jobCompany">{props.company}</p>
          <p className="jobTitle">{props.title}</p>
          <p className="jobLocation">{props.location}</p>
          <p className="jobType">{props.type}</p>
        </div>
      </div>
    )
    
}

export default JobCard;
