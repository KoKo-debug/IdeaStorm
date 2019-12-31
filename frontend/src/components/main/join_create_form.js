import React from 'react';
import { format } from 'url';


class JoinCreateForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { status } = this.props; 
        if (status === "join") {
            return null;
        } else if (status === "create") {
            return null;
        } else {
            return null;
        }
        
    }

}

export default JoinCreateForm;