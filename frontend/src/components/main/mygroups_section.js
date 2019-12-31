import React from "react";
import { connect } from "react-redux";
import GroupListing from "./group_listing";
import { getUserGroups } from "../../util/groups_util";
import "./css/mygroups.css";

class MyGroupIndex extends React.Component{
  constructor(props){
    super(props);
    
    this.myGroupsBuilder = this.myGroupsBuilder.bind(this);
  }

  myGroupsBuilder(){
    let propGroups = this.props.groups;
    return propGroups.map((group, idx) => {
      return(
        <div>
          <GroupListing group={group} key={idx} />
        </div>        
      );
    })
  }

  componentDidMount(){
    // debugger;
    // if(typeof this.props.groups === "undefined"){
    //   this.props.getUserGroups(this.props.currentUser.id)
    // }
    this.props.getUserGroups(this.props.currentUser.id)
  }
  render(){ 
    debugger;
    if (typeof this.props.groups === "undefined") {
      return null;
    } else {

      return (
        <div id="index-main-container">
          <div id="index-title-container">
            My Groups
        </div>
          <div>
            Build Group/Board selector logic here
        </div>
        </div>
      )

    }    
  }
}

const msp = ({entities, session}) => {
  return({
    groups: entities.groups,
    currentUser: session.user
  })
}

const mdp = dispatch => {
  return({
    getUserGroups: userId => dispatch(getUserGroups(userId))
  })
}

export default connect(msp, mdp)(MyGroupIndex);