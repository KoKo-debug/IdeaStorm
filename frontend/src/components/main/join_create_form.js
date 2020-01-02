import React from 'react';
import { connect } from 'react-redux';
import { format } from 'url';
import './css/join_create_form.css';

class JoinCreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            joinCode: '',
            name: '',
            errors: {}
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();


    }


    renderErrors() {
        return(
            <ul className="errors-container">
                {Object.keys(this.state.errors).map((error,i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }


    render() {
        const { status } = this.props; 
        if (status === "join") {
            return (
              <section className="join-form-container">
                <form className="join-form" onSubmit={this.handleSubmit}>
                  <h2 className="join-form-header">Join a group!</h2>

                  <h3 className="join-create-text">
                    Please enter your join-code.
                  </h3>
                  <span className="join-create-input-span">
                    <input
                      type="text"
                      id="join-create-input"
                      onChange={this.update("joinCode")}
                      placeholder="Join-Code"
                    />
                    <i className="fab fa-codepen"></i>
                  </span>

                  <h3 className="join-create-text">
                    If you do not have a join-code, please ask your group
                    creator for one.
                  </h3>
                  <span className="join-create-span">
                    <input
                      className="join-create-button"
                      type="submit"
                      value="submit"
                    />
                  </span>
                </form>
              </section>
            );
        } else if (status === "create") {
            return (
              <section className="join-form-container">
                <form className="create-form">
                  <h2 className="create-form-header">Create a Group!</h2>

                  <h3 className="join-create-text">
                    What is the name of your group?
                  </h3>

                  <span className="join-create-input-span">
                    <input
                      type="text"
                      id="join-create-input"
                      onChange={this.update("name")}
                      placeholder="Name of group"
                    />
                    <i class="fab fa-mixcloud"></i>
                  </span>

                  <span className="join-create-span">
                    <input
                      className="join-create-button"
                      type="submit"
                      value="submit"
                    />
                  </span>
                </form>
              </section>
            );
        } else {
            return null;
        }
        
    }

}

const msp = ({session}) => {
    return ({
        currentUser: session.user
    }) 

}

// const mdp = dispatch => {
//     return({
//         joinGroup: userId => dispatch()
//     })
// }

export default connect(msp)(JoinCreateForm);