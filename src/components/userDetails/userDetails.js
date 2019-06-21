import React from "react";

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: {
                city: '',
                streatAddress: ''
            }
        };
        this.nameChange = this.nameChange.bind(this);
        this.onStreatAddressChange = this.onStreatAddressChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.formAction = this.formAction.bind(this);
    }

    formAction(event) {
        event.preventDefault();
        console.log(`Name: ${this.state.name}`)
        console.log(`Address: ${JSON.stringify(this.state.address)}`)
    }

    nameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    onCityChange(event) {
        let {address} = this.state;
        address.city = event.target.value;
        this.setState({
            address
        });
    }

    onStreatAddressChange(event) {
        let {address} = this.state;
        address.streatAddress = event.target.value;
        this.setState({
            address
        });
    }

    render() {
        const { name, address = {} } = this.state;
        const { city, streatAddress } = address;
        return (
            <form className="form">
                <div className="content">
                    <label>
                        Name:
                    </label>
                    <input type="text" name="name" value={name} onChange={this.nameChange} />
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
                    <input type="text" name="address" value={streatAddress} onChange={this.onStreatAddressChange} />
                </div>
                <input type="submit" value="Submit" onClick={this.formAction} />
            </form>
        )
    }
}

export default UserDetails