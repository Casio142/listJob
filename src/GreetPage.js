import React from 'react';

const GreetPage = (props) => {

    return (
        <div className = "greetContainer">
            <div className = "postNotShown">
                <p>{props.message}</p>
            </div>
            <div className="displayCenter">
                <button className="moreBtn hvr-sweep-to-right btnGreeting btnSize" onClick={props.displayPost}>{props.btnLabel}</button>
                <button className="saveBtn hvr-sweep-to-right btnGreeting btnSize" onClick={props.displaySaveToggle} >SAVED POSTING</button>
                <button className="devTrendBtn hvr-sweep-to-right btnGreeting btnSize" onClick={props.displaySaveToggle} >DEV JOB TRENDS</button>
            </div>
        </div>
       
    )
}

export default GreetPage;