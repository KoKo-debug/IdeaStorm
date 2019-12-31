import React from 'react';
import './group_index.css';
import MyGroups from "./mygroups_section";

class GroupIndexMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      joinStatus: "ils-jc-selected",
      createStatus: "ils-jc-unselected",
    };
    this.changeSelect = this.changeSelect.bind(this);
    this.renderMainView = this.renderMainView.bind(this);
  }

  changeSelect(){
    let newState = {};
    if (this.state.joinStatus === "ils-jc-selected") {
      newState = {
        joinStatus: "ils-jc-unselected",
        createStatus: "ils-jc-selected"
      };
    } else {
      newState = {
        joinStatus: "ils-jc-selected",
        createStatus: "ils-jc-unselected",
      };
    }
    this.setState(newState);
  }

  renderMainView(){
    if(this.state.joinStatus === "ils-jc-selected"){
      return(
        <MyGroups />
      ) 
    } else {
      return null;
    }
  }

  render(){
    return (
      <div id="group-index-main">
        <div id="index-left-sidebar-container">
          <div id="ils-panel">
            <div className="ils-panel-item">
              <div id="ils-join-create-container">
                <button className={`ils-jc-button ${this.state.joinStatus}`}
                  onClick={() => this.changeSelect()}>
                  Join a Storm
                </button>
                <button className={`ils-jc-button ${this.state.createStatus}`}
                  onClick={() => this.changeSelect()}>
                  Create a Storm
                </button>
              </div>
            </div>
            <div className="ils-panel-item">
              KEYCODE:
            </div>
          </div>
        </div>        

        {this.renderMainView()}

      </div>
    );
  }
} 

export default GroupIndexMain;