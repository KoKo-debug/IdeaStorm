import React from 'react';
import { format } from 'url';
import './css/join_create_form.css';

class JoinCreateForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { status } = this.props; 
        if (status === "join") {
            return (
                <section className="join-form-container">
                    <form className="join-form">
                        <h2 className="join-form-header">
                            Join a group!
                        </h2>

                        <h3 className="join-create-text">
                            Please enter your join-code.
                        </h3>
                        <span className="join-create-input-span">
                            <input type="text"
                                id="join-create-input"
                            />
                        </span>

                        <h3 className="join-create-text">
                            If you do not have a join-code, please ask your group creator for one.
                        </h3>
                        <span className="join-create-span">
                            <input className="join-create-button" type="submit" value="submit" />
                        </span>
                            send user Id as well
                    </form>
                </section>
            )
        } else if (status === "create") {
            return (
                <section className="join-form-container">
                    <form className="create-form">
                        <h2 className="create-form-header">
                            Create a Group!
                        </h2>

                        <h3 className="join-create-text">
                            What is the name of your group?
                        </h3>

                        <span className="join-create-input-span">
                            <input type="text"
                                id="join-create-input"
                            />
                        </span>

                        <span className="join-create-span">
                            <input className="join-create-button" 
                                type="submit" 
                                value="submit" 
                            />
                        </span >
                        send user id as well
                    </form>
                </section>
            )
        } else {
            return null;
        }
        
    }

}

export default JoinCreateForm;