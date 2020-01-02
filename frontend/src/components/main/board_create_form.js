import React from "react";
import { connect } from "react-redux";

const testFunc = () => {

};

class BoardCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  createButton(){
    return(
      <div className="gi-board-button-container">
        <button className="gi-board-create-button">
          Create<br />
          New<br />
          Board
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