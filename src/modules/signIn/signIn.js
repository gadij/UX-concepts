import React from "react";
import PropTypes from "prop-types";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     passwordType: 'password'
        // }
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRetypePasswordChange = this.onRetypePasswordChange.bind(this);
        // this.onRetypePasswordChange = this.onRetypePasswordChange.bind(this);
    }

    handleSignInChange(type, value) {
        const { onSignInChange } = this.props;
        onSignInChange({ [type]: value });
    }

    onEmailChange(event) {
        this.handleSignInChange('email', event.target.value);
    }

    onPasswordChange(event) {
        this.handleSignInChange('password', event.target.value);
    }

    onRetypePasswordChange(event) {
        this.handleSignInChange('retypePassword', event.target.value);
    }

    render() {
        const { email = '', password = '', retypePassword = '', retypeError = false } = this.props;
        // const { passwordType } = this.state;
        return (
            <section className='wrapper'>
                <section className="content">
                    <label>
                        Email:
                    </label>
                    <input key='email' type="email" name="email" value={email} onChange={this.onEmailChange} />
                </section>
                <section className="content">
                    <label>
                        Password:
                    </label>
                    <input key='password' type='password' name="password" value={password} onChange={this.onPasswordChange} />
                </section>
                <section className="content">
                    <label>
                        Retype Password:
                    </label>
                    <input name="retype" type="password" name="retype" value={retypePassword} onChange={this.onRetypePasswordChange} />
                </section>
                {retypeError && <div className="password-validation">* Ops password and retype password dont match</div>}
            </section>
        )
    }
}

SignIn.propTypes = {
    retypePassword: PropTypes.string,
    password: PropTypes.string,
    email: PropTypes.string,
    retypeError: PropTypes.bool,
    onSignInChange: PropTypes.func
}

export default SignIn