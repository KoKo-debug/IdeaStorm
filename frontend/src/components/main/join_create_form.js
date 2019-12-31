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

                        <h3>
                            Please enter your join-code.
                        </h3>

                        <input type="text">

                        </input>

                        <h3>
                            If you do not have a join-code, please ask your group creator for one.
                        </h3>

                        <input className="join-group-button" type="submit" value="submit" />
                            send user Id as well
                    </form>
                </section>
            )
        } else if (status === "create") {
            return (
                <section className="join-form-container">
                    <form className="create-form">
                        <h3 className="crate-form-header">
                            Create a Group!
                        </h3>

                        <h3>
                            What is the name of your group?
                        </h3>

                        <input type="text">
                        </input>

                        <input className="join-group-button" type="submit" value="submit" />
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