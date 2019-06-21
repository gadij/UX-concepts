import React from "react";
import Multiselect from 'multiselect-dropdown-react';

const optionsForTopings = [
    {
        name: "Mashrooms",
        value: 'Mashrooms'
    },
    {
        name: "Pineapple",
        value: 'Pineapple'
    },
    {
        name: "Onion",
        value: 'Onion'
    },
    {
        name: "Olives", 
        value: 'Olives'
    },
    {
        name: "Corn",
        value: 'Corn'
    },
    {
        name: "Tuna",
        value: 'Tuna'
    }
];

class PizzaDetails extends React.Component {
    constructor(props) {
        super(props);
        this.doughChange = this.doughChange.bind(this);
        this.onTopingsChange = this.onTopingsChange.bind(this);
    }

    
    handleOrderChange(type, value) {
        const { onPizzaDetailsChange } = this.props;
        onPizzaDetailsChange({[type]: value});
    }
    
    doughChange(event) {
        this.handleOrderChange('dough', event.target.value);
    }

    onTopingsChange(values) {
        this.handleOrderChange('topings', values);
    }

    render() {
        const { pizzaDetails: { dough = '' } } = this.props
        return (
            <section className='wrapper'>
                <section className="content">
                    <label>
                        Dough:
                    </label>
                    <input type="text" name="dough" value={dough} onChange={this.doughChange} />
                </section>
                <section className="topings content">
                    <label>
                        Topings:
                    </label>
                    <Multiselect options={optionsForTopings} onSelectOptions={this.onTopingsChange} />
                </section>
            </section>
        )
    }
}

export default PizzaDetails