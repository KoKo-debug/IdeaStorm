import React from "react";
import BoardListing from "./group_boards";

class GroupListing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status: "group-boards-listing-hidden"
    };
    this.toggleBoardsDisplay = this.toggleBoardsDisplay.bind(this);
    this.buildGroupBoard = this.buildGroupBoard.bind(this);
    this.createBoardOption = this.createBoardOption.bind(this);
  }

  toggleBoardsDisplay(){
    if (this.state.status === "group-boards-listing-hidden"){
      this.setState({ status: "group-boards-listing-shown" });
    } else {
      this.setState({ status: "group-boards-listing-hidden" });
    }
  }

  buildGroupBoard(){
  }

  createBoardOption(){
    if(this.props.object.currentUser.id === this.props.object.group.creator){      
      return(
        <button className="gl-button-item">
          Create Board
        </button>
      )
    } else {      
      return null;
    }
  }

  render(){  
    let group = this.props.object.group;      
    return(
      <div className="group-listing-container">
        <div className="group-listing-banner">
          <div className="gl-image">
            Image Placeholder
          </div>
          <div className="gl-info-container">
            <h2>
              {group.name}
            </h2>
            <p>
              Members: {group.members.length}
            </p>
            
          </div>
          <div className="gl-button-container">
            <button onClick={()=>this.toggleBoardsDisplay()}
                    className="gl-button-item"> 
              Show Boards
            </button>
            { this.createBoardOption() }
          </div>
        </div>

        <div className={`${this.state.status}`}>
          <BoardListing boards={group.boards}/>
        </div>

      </div>
      
    )
  }
}

export default GroupListing;