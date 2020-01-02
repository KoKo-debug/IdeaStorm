import React from "react";
import { connect } from "react-redux";
import GroupListing from "./group_listing";
// import { getUserGroups } from "../../util/groups_util";
import { fetchUserGroups } from "../../actions/groups_actions";
import "./css/mygroups.css";

class MyGroupIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fetched: false,
    };
    this.myGroupsBuilder = this.myGroupsBuilder.bind(this);
  }

  myGroupsBuilder(){
    let propGroups = Object.values(this.props.groups);
    
    return propGroups.map((group, idx) => {      
      return(
        <div key={idx}>
          <GroupListing group={group}/>
        </div>        
      );
    })
  }

  componentDidMount(){  
    if (!this.state.fetched){
      this.props.getUserGroups(this.props.currentUser.id).then(() => 
        this.setState({fetched: true})        
      )

    }
    
  }

  render(){ 
    if(!this.state.fetched){      
      return null;
    } else {
      return (
        <div id="index-main-container">
          <h1 id="index-title-container">
            Active Storms
          </h1>
          <div id="index-mygroups-container">
            { this.myGroupsBuilder() }
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
    getUserGroups: userId => dispatch(fetchUserGroups(userId))
  })
}

export default connect(msp, mdp)(MyGroupIndex);