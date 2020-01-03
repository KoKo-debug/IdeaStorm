import React from "react";
import BoardListing from "./group_boards";
import BoardCreateForm from "./board_create_form";
import "./css/board_create.css";
import appAcademy from './main_images/app_academy.jpg';

class GroupListing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status: "group-boards-listing-hidden"
    };
    this.toggleBoardsDisplay = this.toggleBoardsDisplay.bind(this);
  }

  toggleBoardsDisplay(){    
    if (this.state.status === "group-boards-listing-hidden") {
      this.setState({ status: "group-boards-listing-shown" });
    } else {
      this.setState({ status: "group-boards-listing-hidden" });
    }
  }

  render(){  
    let group = this.props.object.group;      
    return(
      <div id="glc-outer">
        <div className="group-listing-container">
          <div className="group-listing-banner">
           <div className="gl-image"
              style={{
               background: `url(${appAcademy})`,
               backgroundSize: `cover`
              }}>            
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
              <button onClick={() => this.toggleBoardsDisplay()}
                className="gl-button-item">
                Show Boards
              </button>
              {/* { this.createBoardButton() } */}
            </div>
          </div>

          <div className={`${this.state.status}`}>
            <BoardListing boards={group.boards} />
          </div>
          

        </div>
        <BoardCreateForm object={{
          group: group,
          user: this.props.object.currentUser
        }} />
      </div>
      
      
    )
  }
}

export default GroupListing;