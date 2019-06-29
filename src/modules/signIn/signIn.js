import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordType: 'password'
        }
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        // this.onRetypePasswordChange = this.onRetypePasswordChange.bind(this);
        this.onPasswordReveal = this.onPasswordReveal.bind(this);
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

    onPasswordReveal(event) {
        event.preventDefault();
        const { passwordType } = this.state;
        const type = passwordType === 'password' ? 'text' : 'password';
        this.setState({ 'passwordType': type });
    }

    render() {
        const { email = '', password = '', /*retypePassword = '' , retypeError = false*/ } = this.props;
        const { passwordType } = this.state;
        const classnames = classNames('toggle-password',
        {
            'hide': passwordType === 'text'
        })
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
                    <div className='password-container'>
                        <input key='password' type={passwordType} name="password" value={password} onChange={this.onPasswordChange}/>
                        <span className={classnames} onClick={this.onPasswordReveal}></span>
                    </div> 

                </section>
                {/* <section className="content">
                    <label>
                        Retype Password:
                    </label>
                    <input name="retype" type="password" name="retype" value={retypePassword} onChange={this.onRetypePasswordChange} />
                </section> */}
            </section>
        )
    }
}

SignIn.propTypes = {
    password: PropTypes.string,
    email: PropTypes.string,
    onSignInChange: PropTypes.func
}

export default SignIn