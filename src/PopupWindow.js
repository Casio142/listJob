import React,{Component} from 'react';


class PopupWindow extends Component{

    constructor(props){
        super(props);
        this.state = {
            saved: false
        }
        this.toggleSaved = this.toggleSaved.bind(this);
    }

    toggleSaved(){
        //if it is false
            //run the delete saved thing


        this.setState({
            saved: !this.state.saved
        })
        this.props.saveClick(this.props.data)
    }


render(){
    // <button onClick={this.toggleSaved}  className={this.state.saved ? "activeSaved" : "addFavBtn"}>{this.state.saved ? "POST SAVED" : "SAVE POST"}</button>

   return( 

    <div className="popUpContainer">
        <div className = "popUpWindow">
            <button className="popCloseBtn" onClick={this.props.toggle}>CLOSE</button>
            <div className="topSecFont">
                <p className="jobCompany">{this.props.data.company}</p>
                <p className="jobTitle">{this.props.data.title}</p>
                <p className = "jobLocation">{this.props.data.location}</p>
                <p className = "jobType">{this.props.data.type}</p>
                <div className="jobType" dangerouslySetInnerHTML={{ __html:this.props.data.how_to_apply }}/>
            </div>
            
            <div className="divider"></div>
            <div dangerouslySetInnerHTML={{ __html:this.props.data.description }}/>
        </div>
    </div>


    
    
    )
}
}
export default PopupWindow;