import React from 'react';


const PopupWindow = (props) => {

   return( 

    <div className="popUpContainer">
        <div className = "popUpWindow">
            <button className="popCloseBtn" onClick={props.toggle}>CLOSE</button>
            <div className="topSecFont">
                <p className="jobCompany">{props.data.company}</p>
                <p className="jobTitle">{props.data.title}</p>
                <p className = "jobLocation">{props.data.location}</p>
                <p className = "jobType">{props.data.type}</p>
                <div className="jobType" dangerouslySetInnerHTML={{ __html:props.data.how_to_apply }}/>
            </div>
            
            <div className="divider"></div>
            <div dangerouslySetInnerHTML={{ __html:props.data.description }}/>
            <button onClick={()=>props.saveClick(props.data)} className="addFavBtn">SAVE POST</button>
        </div>
    </div>


    
    
    )
}

export default PopupWindow;