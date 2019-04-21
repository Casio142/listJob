import React from 'react';


const PopupWindow = (props) => {


    console.log(props.data);
   return( 

    <div onClick={props.toggle} className="popUpContainer">
        <div className = "popUpWindow">
            <p>{props.data.company}</p>
            <p>{props.data.title}</p>
            <p>{props.data.location}</p>
            <p>{props.data.type}</p>
            <div dangerouslySetInnerHTML={{ __html:props.data.how_to_apply }}/>
            <div className="divider"></div>
            <div dangerouslySetInnerHTML={{ __html:props.data.description }}/>
        </div>
    </div>


    
    
    )
}

export default PopupWindow;