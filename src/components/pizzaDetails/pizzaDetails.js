import React from "react";
import Select from 'react-select';

const optionsForTopings = [
    {
        label: "Mashrooms",
        value: 'Mashrooms'
    },
    {
        label: "Pineapple",
        value: 'Pineapple'
    },
    {
        label: "Onion",
        value: 'Onion'
    },
    {
        label: "Olives",
        value: 'Olives'
    },
    {
        label: "Corn",
        value: 'Corn'
    },
    {
        label: "Tuna",
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
        onPizzaDetailsChange({ [type]: value });
    }

    doughChange(event) {
        this.handleOrderChange('dough', event.target.value);
    }

    onTopingsChange(values) {
        this.handleOrderChange('topings', values);
    }

    render() { // TODO: multi select component is not working, selected it not displayed
        const { pizzaDetails: { dough = '', topings = [] } } = this.props
        return (
            <section className='wrapper'>
                <section className="content">
                    <label>
                        Dough:
                    </label>
                    <input type="text" name="dough" value={dough} onChange={this.doughChange} />
                </section>
                <section className="topings content">
                    <label className='toping'>
                        Topings:
                    </label>
                    <Select
                        placeholder='Select a toping'
                        className='topings-selection'
                        isMulti
                        value={topings}
                        onChange={this.onTopingsChange}
                        options={optionsForTopings} />
                </section>
            </section>
        )
    }
}

export default PizzaDetails