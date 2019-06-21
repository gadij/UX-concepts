import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom'
// import FillBar from './components/fillBar'
import { UserDetails, PizzaDetails, PaymentDetails } from './index'

import './index.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.submitOrder = this.submitOrder.bind(this);
        this.handleUserDetailsChange = this.handleUserDetailsChange.bind(this);
        this.handlePizzaDetailsChange = this.handlePizzaDetailsChange.bind(this);
        this.handlePaymentDetailsChange = this.handlePaymentDetailsChange.bind(this);
        this.state = {
            orderDetail: {
                dough: '',
                topings: []
            },
            userDetails: {
                name: '',
                city: '',
                address: ''
            },
            paymentDetails: {
                cardNumber: '',
                valid: '',
                cvv: ''
            }
        }
    }

    handleUserDetailsChange(newDetails) {
        const { userDetails } = this.state;
        const merged = Object.assign(userDetails, newDetails);
        this.setState({ userDetails: merged });

    }
    handlePizzaDetailsChange(newPizzaDetails) {
        const { orderDetail } = this.state;
        const merged = Object.assign(orderDetail, newPizzaDetails);
        this.setState({ orderDetail: merged });
    }

    handlePaymentDetailsChange(newPaymentDetails) {
        const { paymentDetails } = this.state;
        const merged = Object.assign(paymentDetails, newPaymentDetails);
        this.setState({ paymentDetails: merged });
    }

    submitOrder(event) {
        event.preventDefault();
        const { orderDetail, userDetails, paymentDetails } = this.state;
        const { history } = this.props;
        console.log(`this is your detail: ${JSON.stringify(userDetails)}
                this is your order: ${JSON.stringify(orderDetail)}
                this is the payment method: ${JSON.stringify(paymentDetails)}`)
        history.push('/order');
    }
    render() {
        const { userDetails, orderDetail, paymentDetails } = this.state;
        return (
            <div className='main'>
                <h1>
                    <label>
                        Pizza Party
            </label>
                    <span className='logo'></span>
                </h1>
                <div className='content'>
                    <form className="form">
                        {/* <section>
              <UserDetails
                userDetails={userDetails}
                onUserDetailsChange={this.handleUserDetailsChange} />
            </section>
            <section>
              <PizzaDetails
                pizzaDetails={orderDetail}
                onPizzaDetailsChange={this.handlePizzaDetailsChange} />
            </section>
            <section>
              <PaymentDetails
                paymentDetails={paymentDetails}
                onPaymentDetailsChange={this.handlePaymentDetailsChange} />
            </section> */}
                        <Switch>
                            <Route exact path='/order'
                                component={() =>
                                    <PizzaDetails
                                        pizzaDetails={orderDetail}
                                        onPizzaDetailsChange={this.handlePizzaDetailsChange} />
                                } />
                            <Route exact path="/payment" component={PaymentDetails} />
                            <Route exact path="/"
                                component={() =>
                                    <UserDetails
                                        userDetails={userDetails}
                                        onUserDetailsChange={this.handleUserDetailsChange} />
                                } />
                        </Switch>
                        <input type="submit" value="Submit" onClick={this.submitOrder} />
                    </form>
                </div>
            </div>
        );

    }
};

export default withRouter(Main);