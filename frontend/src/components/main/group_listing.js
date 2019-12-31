import React from "react";

class GroupListing extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status: "group-boards-listing-hidden"
    };
    this.toggleBoardsDisplay = this.toggleBoardsDisplay.bind(this);
  }

  toggleBoardsDisplay(){
    if (this.state.status === "group-boards-listing-hidden"){
      this.setState({ status: "group-boards-listing-shown" });
    } else {
      this.setState({ status: "group-boards-listing-hidden" });
    }
  }

  render(){
    return(
      <div className="group-listing-container">
        <div className="group-listing-banner">
          <div>
            Image
          </div>
          <div>
            General Info
          </div>
          <div>
            <button>
              Show Boards button
            </button>
          </div>
        </div>

        <div className={`${this.state.status}`}>

        </div>

      </div>
      
    )
  }
}

export default GroupListing;