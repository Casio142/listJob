import React from 'react';


const PopupWindow = (props) => {


    console.log(props.data);
   return( 

    <div onClick={props.toggle} className="popUpContainer">
        <div className = "popUpWindow">
            <div className="topSecFont">
                <p className="jobCompany">{props.data.company}</p>
                <p className="jobTitle">{props.data.title}</p>
                <p className = "jobLocation">{props.data.location}</p>
                <p className = "jobType">{props.data.type}</p>
                <div className="jobType" dangerouslySetInnerHTML={{ __html:props.data.how_to_apply }}/>
            </div>
            
            <div className="divider"></div>
            <div dangerouslySetInnerHTML={{ __html:props.data.description }}/>
        </div>
    </div>


    
    
    )
}

export default PopupWindow;