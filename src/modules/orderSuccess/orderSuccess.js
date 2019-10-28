import React from "react";
// import Card from './cardDetails';
// import PropTypes from 'prop-types';

class OrderSuccess extends React.PureComponent {
    
    render() {

        return(
            <div className="orderSuccess-container">
                <h2>Order is on it`s way</h2>
                <div className='orderSuccess-deliveryIcon' />
            </div>
         )
    }
}

export default OrderSuccess