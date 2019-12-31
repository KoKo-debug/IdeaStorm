import React from 'react';
import { withRouter } from 'react-router-dom';
import './signup_form.css';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            handle: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            handle: this.state.handle,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }

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
            <div className="signup-form-container">
                <form className ="signup-form" onSubmit={this.handleSubmit}>
                    <div className="signup-input-field">
                        <span className="signup-header">Sign Up</span>
                        <br />
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
                            <input type="text"
                                value={this.state.handle}
                                onChange={this.update('handle')}
                                placeholder="Handle"
                            />
                            <i className="fas fa-user"></i>
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
                        <section className="input-section">
                            <input type="password"
                                value={this.state.password2}
                                onChange={this.update('password2')}
                                placeholder="Confirm Password"
                            />
                            <i className="fas fa-unlock-alt"></i>
                        </section>
                        <br />
                        <input className="signup-button" type="submit" value="Submit" />
                    </div>
                    {this.renderErrors()}
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);