import React from "react";
import { connect } from "react-redux";
import plusIcon from "./main_images/plusIcon.jpeg";

const testFunc = () => {

};

class BoardCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hoverText: false
    };
  this.buttonText = this.buttonText.bind(this);
  }

  buttonText(){
    if(this.state.hoverText){
      return(
        <div>
          Create<br />
          New<br />
          Board
        </div> 
      )
    } else {
      return(
        <div>
          <img src={plusIcon} className="create-board-plusicon"></img>
        </div>
      )
    }    
  }

  createButton(){
    return(
      <div className="gi-board-button-container">
        <button className="gi-board-create-button">
          { this.buttonText() }           
        </button>
      </div>
      
    )
  }


  render(){    
    if(this.props.object.group.creator === this.props.object.user.id){      
      return(
        this.createButton()
      )
    } else {
      return null;
    }
  }
}

const mdp = dispatch => {
  return{
    testFunc
  };
};

export default connect(null, mdp)(BoardCreateForm);