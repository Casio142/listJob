import React from 'react';

const GreetPage = (props) => {
    //The saved feature 
    //<button className="saveBtn hvr-sweep-to-right btnGreeting btnSize" onClick={props.displaySaveToggle} >SAVED POSTING</button>

    return (
        <div className = "greetContainer">
            <div className = "postNotShown">
                <p>{props.message}</p>
            </div>
            <div className="displayCenter">
                <button className="moreBtn hvr-sweep-to-right btnGreeting btnSize" onClick={props.displayPost}>
                {props.loading?
                    <div class="spinner-border text-light" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                :
                    props.btnLabel

                }
                </button>
            </div>
        </div>
       
    )
}

export default GreetPage;