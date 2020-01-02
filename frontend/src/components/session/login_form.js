import React from 'react';
import { withRouter } from 'react-router-dom';
import './login_form.css';
import backgroundIMG from './background.jpg';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/storms');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul className="errors-container">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">
                <img src={backgroundIMG} className="form-background" alt="background" />
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="login-input-field">
                        <span className="login-header">Log In</span>
                        <section className="input-section">
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                            />
                            <i className="fas fa-envelope"></i>
                        </section>
                        <br />
                        <section className="input-section">
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                            <i className="fas fa-unlock-alt"></i>
                        </section>
                        <br />
                        <input className="login-button" type="submit" value="Submit" />
                        <button id="login-demo-button" onClick={(event) => {
                            this.state.email = "test001@mail.com"
                            this.state.password = "123456"
                            this.handleSubmit(event)
                            }}>
                            DEMO USER
                        </button>
                    </div>
                    {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);