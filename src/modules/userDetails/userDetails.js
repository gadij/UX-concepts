import React from "react";
import PropTypes from 'prop-types';
import ReactModal from "react-modal";

const customStyles = {
    content : {
        top: '8%',
        left: '2%',
        right: '8%',
        bottom: '8%',
        background: 'crimson',
        padding: '10px'
    }
  };


class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onStreatAddressChange = this.onStreatAddressChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.state = {
            isModalOpen: props.favoriteInfo ? true : false
        }
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

    renderModalContent(favoriteInfo) {
        const { name, pizzaOrder ,address, city } = favoriteInfo;
        return (
            <div className="favorite-main">
            <h2 className="favorie-header">Hi {name}!</h2>
            <div className="favorite-icon"/>
            <section className="favorie-content">
                <h4>Would you like to order you usuall?</h4>
                <p>
                    <div>
                        Dough: {pizzaOrder.dough}
                    </div>
                    <div>
                        Toppins: {pizzaOrder.toppings.join(', ')}
                    </div>
                </p>
                <p>
                    To:
                    <div>
                        {address}, {city}
                    </div>
                </p>
            </section>
            </div>
        )
    }

    render() {
        const { userDetails: { name = '', city = '', address = '' }, favoriteInfo, goToOrderSuccess } = this.props;
        const { isModalOpen } = this.state;
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
                <ReactModal 
                    isOpen={isModalOpen}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    style={customStyles}
                >
                    {isModalOpen && this.renderModalContent(favoriteInfo)}
                    <div className="button-container">
                        <button className="favorite-button" onClick={()=> this.setState({isModalOpen: false})}>No</button>
                        <button className="favorite-button order" onClick={() => goToOrderSuccess('orderSuccess')}>Yes!</button>
                    </div>
                </ReactModal>
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
    onUserDetailsChange: PropTypes.func,
    favoriteInfo: PropTypes.object,
    goToOrderSuccess: PropTypes.func
}

export default UserDetails