import React from "react";
import { connect } from "react-redux";
import GroupListing from "./group_listing";
// import { getUserGroups } from "../../util/groups_util";
import { fetchUserGroups } from "../../actions/groups_actions";
import "./css/mygroups.css";
import backgroundIMG from "./main_images/background1.jpg";
import indexBackground from './main_images/index-bg1.jpg';
import headerCloud from './main_images/header-clouds.jpg';

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
      const object = {
        group: group,
        currentUser: this.props.currentUser,
      };
      return(
        <div key={idx}>
          <GroupListing object={object}/>
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
        <div
          id="index-main-container"
          // style={{
          //   background: `url(${backgroundIMG})`,
          //   backgroundSize: `cover`
          // }}
        >
          <h1
            id="index-title-container"
            style={{
              background: `url(${headerCloud})`,
              backgroundSize: `cover`
            }}
          >
            Welcome to IdeaStorm!
          </h1>
          <div
            id="index-mygroups-container"
            style={{
              background: `url(${indexBackground})`,
              backgroundSize: `cover`
            }}
          >
            <h3 className="storm-span-text">Here are your Active Storms</h3>
            {this.myGroupsBuilder()}
          </div>
        </div>
      );

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