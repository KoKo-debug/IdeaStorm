import React from "react";

class GroupListing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status: "group-boards-listing-hidden"
    };
    this.toggleBoardsDisplay = this.toggleBoardsDisplay.bind(this);
    this.buildGroupBoard = this.buildGroupBoard.bind(this);
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

  render(){      
    let group = this.props.group;      
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
          </div>
        </div>

        <div className={`${this.state.status}`}>
          Shown
        </div>

      </div>
      
    )
  }
}

export default GroupListing;