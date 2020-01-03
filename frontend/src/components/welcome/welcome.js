import React from 'react';
import { withRouter } from 'react-router-dom';
import ideas from './images/ideas.jpg';
import './css/welcome.css';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="welcome-main-container">
                <span className="new-idea-container">
                    <h3 className="new-idea">Are you looking for New and Fresh ideas?</h3>
                </span>
                <img src={ideas} className="idea-img"/>

                <span className="collaborate-container">
                    <h3 className="collaborate">collaborate with your</h3>
                    <h3 className="collaborate"></h3>
                    <h3 className="collaborate">friends, co-workers, or employees!</h3>
                </span>


            </div>
        )
    }

}

export default withRouter(Welcome);

