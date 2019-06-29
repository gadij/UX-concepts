import React from "react";
import PropTypes from 'prop-types';

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onStreatAddressChange = this.onStreatAddressChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
    }

    handleUserDetailsChange(type, value) {
        const { onUserDetailsChange } = this.props;
        onUserDetailsChange({ [type]: value });
    }

    onNameChange(event) {
        this.handleUserDetailsChange('name', event.target.value);
    }

    onCityChange(event) {
        this.handleUserDetailsChange('city', event.target.value);

    }

    onStreatAddressChange(event) {
        this.handleUserDetailsChange('address', event.target.value);
    }

    render() {
        const { userDetails: { name = '', city = '', address = '' } } = this.props;
        return (
            <section className='wrapper'>
                <section className="content">
                    <label>
                        Name:
                    </label>
                    <input type="text" name="name" value={name} onChange={this.onNameChange} />
                </section>
                <section className="content">
                    <label>
                        City:
                    </label>
                    <input type="text" name="city" value={city} onChange={this.onCityChange} />
                </section>
                <section className="content">
                    <label>
                        Address:
                    </label>
                    <input type="text" name="address" value={address} onChange={this.onStreatAddressChange} />
                </section>
            </section>
        )
    }
}

UserDetails.propTypes = {
    userDetails: PropTypes.shape({
        name: PropTypes.string,
        city: PropTypes.string,
        address: PropTypes.string
      }),
    onUserDetailsChange: PropTypes.func
}

export default UserDetails