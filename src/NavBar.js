import React from 'react';

const NavBar = (props) =>{


            /*
            ADD THIS TO MENU WHEN TRENDING FEATURE IS ABOUT TO BE ADDED

            <li className="nav-item">
              <a className={props.navStatus == 3 ? "nav-link active":"nav-link"} id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
                aria-controls="pills-contact" aria-selected="false" onClick = {props.trendClick}>Dev Job Trends</a>
            </li>
            */
    return(
        <ul className=" nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className={props.navStatus == 1 ? "nav-link active":"nav-link non-active"} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                aria-controls="pills-home" aria-selected="true" onClick = {props.expandPostCard}>Job Postings</a>
            </li>
            <li className="nav-item">
              <a className={props.navStatus == 2 ? "nav-link active":"nav-link non-active"} id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                aria-controls="pills-profile" aria-selected="false" onClick = {props.saveClick}>Saved Postings</a>
            </li>
            
        </ul>
    )

}

export default NavBar;