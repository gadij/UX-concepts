import React from "react";
import Card from './cardDetails';
import PropTypes from 'prop-types';

class PaymentDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentMethod: 'credit' // card or cash
        }
        this.setPaymentMethod = this.setPaymentMethod.bind(this);
    }

    setPaymentMethod(event) {
        this.setState({ paymentMethod: event.target.value });
    }

    render() {
        const { paymentDetails, onPaymentDetailsChange } = this.props;
        const { paymentMethod } = this.state;
        return (
            <div className="paymentMethod-container wrapper" onChange={this.setPaymentMethod}>
                <div className="paymentMethod-method">

                    <input type="radio" value="cash" name="method" />
                    <label>
                        CASH
                    </label>
                </div>
                <div className="paymentMethod-method">
                    <input type="radio" value="credit" name="method" defaultChecked />
                    <label>
                        CREDIT CARD
                        </label>
                    {paymentMethod === 'credit'
                        && <Card
                            onPaymentDetailsChange={onPaymentDetailsChange}
                            paymentDetails={paymentDetails} />
                    }
                </div>
            </div>
        )
    }
}

PaymentDetails.propTypes = {
    paymentDetails: PropTypes.object,
    onPaymentDetailsChange: PropTypes.func
}

export default PaymentDetails