import React from "react";
import { Switch, Route, Router } from "react-router-dom";
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
        this.navigateBack = this.navigateBack.bind(this);

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

    navigateToPage() {
        // e.preventDefault();
        const { history } = this.props;
        switch (history.location.pathname) {
            case '/':
                history.replace('/order');
                break;
            case '/order':
                history.replace('/payment');
                break;
            default:
                break;
        }
    }

    navigateBack(e) {
        e.preventDefault();
        const { history } = this.props;
        switch (history.location.pathname) {
            case '/order':
                history.replace('/');
                break;
            case '/payment':
                history.replace('/order');
                break;
            default:
                break;
        }
    }

    submitOrder(event) {
        event.preventDefault();
        const { orderDetail, userDetails, paymentDetails } = this.state;
        console.log(`this is your detail: ${JSON.stringify(userDetails)}
                this is your order: ${JSON.stringify(orderDetail)}
                this is the payment method: ${JSON.stringify(paymentDetails)}`)
        this.navigateToPage();
    }
    render() { // TODO: add back navigation button
        const { userDetails, orderDetail, paymentDetails } = this.state;
        const { history } = this.props;
        const currentPath = history.location.pathname;
        return (
            <div className='main'>
                <h1>
                    <label>
                        Pizza Party
                    </label>
                    <span className='logo' />
                </h1>
                <div className='content'>
                    <form className="form">
                        <Router history={history}>
                            <Switch>
                                <Route exact path='/order'
                                    component={() =>
                                        <PizzaDetails
                                            pizzaDetails={orderDetail}
                                            onPizzaDetailsChange={this.handlePizzaDetailsChange} />
                                    } />
                                <Route exact path="/payment"
                                    component={() =>
                                        <PaymentDetails
                                            paymentDetails={paymentDetails}
                                            onPaymentDetailsChange={this.handlePaymentDetailsChange} />} />
                                <Route exact path="/"
                                    component={() =>
                                        <UserDetails
                                            userDetails={userDetails}
                                            onUserDetailsChange={this.handleUserDetailsChange} />
                                    } />
                            </Switch>
                        </Router>
                        <div className="button-container">
                            {currentPath !== '/' && <button className='back-button' onClick={this.navigateBack}>Back</button>}
                            <input type="submit" value={currentPath === '/payment' ? 'Submit' : 'Next'} onClick={this.submitOrder} />
                        </div>
                    </form>
                </div>
            </div>
        );

    }
};

export default withRouter(Main);