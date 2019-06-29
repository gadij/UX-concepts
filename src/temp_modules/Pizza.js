import React from 'react';
import PizzaDetails from "../modules";

const Pizza = ({ orderDetails }) => {

    const handlePizzaDetailsChange = ({ pizzaDetails }) => {
        
    }

    return (
        <PizzaDetails
            dough={pizzaDetails.dough}
            onPizzaDetailsChange={this.handlePizzaDetailsChange} />
    )
}

export default Pizza;