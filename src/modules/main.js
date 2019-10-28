import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import { UserDetails, PizzaDetails, PaymentDetails, SignIn, OrderSuccess } from './index'
import { favorites } from '../storage/favorite-info';

import './index.scss';

const SAVED_EMAIL = 'gadij@tikalk.com';

let self;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.submitOrder = this.submitOrder.bind(this);
        this.handleUserDetailsChange = this.handleUserDetailsChange.bind(this);
        this.handlePizzaDetailsChange = this.handlePizzaDetailsChange.bind(this);
        this.handlePaymentDetailsChange = this.handlePaymentDetailsChange.bind(this);
        this.navigateBack = this.navigateBack.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignInChange = this.handleSignInChange.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleNavigateToSummary = this.handleNavigateToSummary.bind(this);

        this.state = {
            signDetails: {
                email: '',
                password: '',
            },
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
            },
            showFavoriteOrderModal: false
        }

        self = this;
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

    handleSignInChange(newSignInDetails) {
        const { signDetails } = this.state;
        const merged = Object.assign(signDetails, newSignInDetails);
        this.setState({ signDetails: merged });
    }

    navigateToPage(to) {
        let history;
        if (this === undefined) {
            history = self.props.history;
        } else {
            history = this.props.history;
        }
        if (to) {
            history.replace(`/${to}`);
            return;
        }
        switch (history.location.pathname) {
            case '/':
                history.replace('/user');
                break;
            case '/user':
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
        const history = this && this.props.history || self.props.history;
        switch (history.location.pathname) {
            case '/order':
                history.replace('/user');
                break;
            case '/payment':
                history.replace('/order');
                break;
            default:
                history.replace('/');
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

    handleSignIn(event) {
        event.preventDefault();
        const { signDetails } = this.state;
        console.log(`You have been sign in as ${signDetails.email}`);
        if (signDetails.email === SAVED_EMAIL) {
            const userDetails = {
                name: 'Gadi jacobson',
                address: 'Kiriat Atidim 7',
                city: 'Tel aviv'
            }
            this.setState({
                userDetails
            }, this.navigateToPage());
        } else {
            this.navigateToPage()
        }
    }

    getSubmitButton(currentPath) {
        if (currentPath === '/orderSuccess') return;
        if (currentPath !== '/') {
            return (
                <input type="submit" value={currentPath === '/payment' ? 'Submit' : 'Next'} onClick={this.submitOrder} />
            )
        }
        return (
            <input type="submit" value={'Sign in'} onClick={this.handleSignIn} />
        )
    }

    getBackButton(currentPath) {
        if (currentPath === '/orderSuccess') {
            return (
                <button className='back-button' onClick={this.navigateBack}>Home</button>
            )
        }
        return (currentPath !== '/' && currentPath !== '/user') && <button className='back-button' onClick={this.navigateBack}>Back</button>
    }

    handleNavigateToSummary() {
        this.navigateToPage('orderSuccess');
    }

    renderRoute(history) {
        const { userDetails, orderDetail, paymentDetails, signDetails } = this.state;
        const favoriteInfo = signDetails.email && favorites[signDetails.email];
        return (
            <Router history={history}>
                <Switch>
                    <Route key="signin" exact path='/'
                        render={() =>
                            <SignIn
                                {...signDetails}
                                onSignInChange={this.handleSignInChange} />
                        } />
                    <Route key="pizza" exact path='/order'
                        render={() =>
                            <PizzaDetails
                                pizzaDetails={orderDetail}
                                onPizzaDetailsChange={this.handlePizzaDetailsChange} />
                        } />
                    <Route key="payment" exact path="/payment"
                        render={() =>
                            <PaymentDetails
                                paymentDetails={paymentDetails}
                                onPaymentDetailsChange={this.handlePaymentDetailsChange} />} />
                    <Route key="user" exact path="/user"
                        render={() =>
                            <UserDetails
                                userDetails={userDetails}
                                email={signDetails.email}
                                favoriteInfo={favoriteInfo}
                                goToOrderSuccess={this.navigateToPage}
                                onUserDetailsChange={this.handleNavigateToSummary} />
                        } />
                    <Route key="orderSuccess" exact path="/orderSuccess"
                        render={() =>
                            <OrderSuccess />
                        } />
                </Switch>
            </Router>
        )
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }
    
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render() { // TODO: add back navigation button
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
                        {this.renderRoute(history)}
                        <div className="button-container">
                            {this.getBackButton(currentPath)}
                            {this.getSubmitButton(currentPath)}
                        </div>
                    </form>
                </div>
            </div>
        );

    }
};

export default withRouter(Main);