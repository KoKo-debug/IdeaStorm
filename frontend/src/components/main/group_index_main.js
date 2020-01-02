import React from 'react';
import './css/group_index.css';
import './css/join_create_form.css';
import MyGroups from "./mygroups_section";
import JoinCreateForm from './join_create_form';

class GroupIndexMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: "join"
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(field) {
    if (field === "join") {
      if (this.state.status === "join") {
        return;
      } else {
        this.setState({
          status: "join"
        });
      }
    } else if (field === "create") {
      if (this.state.status === "create") {
        return;
      } else {
        this.setState({
          status: "create"
        });
      }
    } 
    
  }

  render(){
    return (
      <div id="group-index-main">
        <section id="index-left-sidebar-container">
          
          <section className="join-create-button-container">
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

        <MyGroups />

      </div>
    );
  }
} 

export default GroupIndexMain;