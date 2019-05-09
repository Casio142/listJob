import React from 'react';

const LoadingIcon = (props) =>{

    if(props.loading === false){
            return null;
    } 
    else{
        return (
            <div class="spinner-border text-light" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        )
    }
                

}

export default LoadingIcon;