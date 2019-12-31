import React from 'react';
import './css/group_index.css';
import MyGroups from "./mygroups_section";
import JoinCreateForm from './join_create_form';

class GroupIndexMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderMainView = this.renderMainView.bind(this);
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

  handleClick(field) {
    if (field === "join") {
      this.setState({
        status: "join"
      });
    } else if (field === "create") {
      this.setState({
        status: "create"
      });
    } 


    // if (this.state.status === "") {
    // } else {
    //   this.setState({
    //     status: ""
    //   });
    // }
    
  }

  render(){
    return (
      <div id="group-index-main">
        <section id="index-left-sidebar-container">
          
          <section>
            <button className="joinStorm-button"
              onClick={() => this.handleClick("join")}>
              Join a Storm
            </button>
            <button className="createStorm-button"
              onClick={() => this.handleClick("create")}>
              Create a Storm
            </button>
          </section>

          <section>
            <JoinCreateForm status={this.state.status} />
          </section>

        </section>        

        {this.renderMainView()}

      </div>
    );
  }
} 

export default GroupIndexMain;