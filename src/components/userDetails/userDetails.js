import React from "react";

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onStreatAddressChange = this.onStreatAddressChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
    }

    handleUserDetailsChange(type, value) {
        const { onUserDetailsChange } = this.props;
        onUserDetailsChange({[type]: value});
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
        const { userDetails: {name = '', city = '', address = ''} } = this.props;
        return (
            <React.Fragment>
                <div className="content">
                    <label>
                        Name:
                    </label>
                    <input type="text" name="name" value={name} onChange={this.onNameChange} />
                </div>
                <div className="content">
                    <label>
                        City:
                    </label>
                    <input type="text" name="city" value={city} onChange={this.onCityChange} />
                </div>
                <div className="content">
                    <label>
                        Address:
                    </label>
                    <input type="text" name="address" value={address} onChange={this.onStreatAddressChange} />
                </div>
            </React.Fragment>
        )
    }
}

export default UserDetails