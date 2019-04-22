import React from 'react';

const GreetPage = (props) => {

    return (
        <div className = "greetContainer">
            <div className = "postNotShown">
                <p>{props.message}</p>
            </div>
            <div className="displayCenter">
                <button className="moreBtn hvr-sweep-to-right btnGreeting btnSize" onClick={props.clickAction}>{props.btnLabel}</button>
                <button className="saveBtn hvr-sweep-to-right btnGreeting btnSize" >SAVED POSTING</button>
            </div>
        </div>
       
    )
}

export default GreetPage;