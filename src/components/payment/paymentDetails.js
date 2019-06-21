import React from "react";
import Card from './cardDetails';

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
                <div class="paymentMethod-method">
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
                <div class="paymentMethod-method">

                    <input type="radio" value="cash" name="method" />
                    <label>
                        CASH
                    </label>
                </div>
            </div>
        )
    }
}

export default PaymentDetails