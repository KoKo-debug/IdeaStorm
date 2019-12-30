import React from 'react';
import SidebarLeft from "./index_sidebar_left";
import './group_index.css';

class GroupIndexMain extends React.Component {
    

  render() {
    return (
      <div id="group-index-main">
        
        <div id="index-left-sidebar-container">
          <div id="ils-panel">
            <div className="ils-panel-item">
              JOIN CREATE
              <div>
                testing
              </div>
            </div>
            <div className="ils-panel-item">
              KEYCODE:
            </div> 
          </div>
        </div>
        <div id="index-main-container">
            GROUPS LIST
        </div>
      </div>
    );
  }
}

export default GroupIndexMain;