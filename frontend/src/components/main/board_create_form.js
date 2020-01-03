import React from "react";
import { connect } from "react-redux";
import plusIcon from "./main_images/plusIcon.jpeg";

const testFunc = () => {

};

class BoardCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalActive: false
    };  
  this.toggleState = this.toggleState.bind(this);
  }

  toggleState(){      
    this.setState(prevState => ({
      modalActive: !prevState.modalActive
    }));
  }

  renderCreateForm(){
    if(this.state.modalActive){
      return (
        <div id="board-create-modal-container"
          tabIndex="0"
        onBlur={()=>this.toggleState()}>
          TEST
        </div>
      )
    } else {      
      return null;
    }    
  }

  createButton(){
    return(
      <div className="gi-board-button-container">
        <button className="gi-board-create-button" 
                onClick={()=> this.toggleState()}> 
          <img src={plusIcon} className="create-board-plusicon"></img>                
        </button>
        { this.renderCreateForm() }
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