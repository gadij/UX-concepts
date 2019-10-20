import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

const optionsForTopings = [
    {
        label: "Mushrooms",
        value: 'Mushrooms'
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

    onTopingsChange(event) {
        event.preventDefault();
        const { pizzaDetails: { topings = [] } } = this.props;
        const { id } = event.target;
        let selectedTopings = [];
        if (topings.includes(id)) {
            selectedTopings = [...topings.filter(item => item !== id)]
        } else {
            selectedTopings = [...topings];
            selectedTopings.push(id);
        }
        this.handleOrderChange('topings', selectedTopings);
    }

    renderTopings() {
        const { pizzaDetails: { topings = [] } }= this.props;
        return(
            <div className="topings-container">
                {optionsForTopings.map(item => {
                    const classname = classNames(
                        'selectable-toping',
                        `toping-${item.value}`,
                        {
                            'selected': topings.includes(item.value)
                        }
                    );
                    return(
                        <span onClick={this.onTopingsChange} id={item.value} key={item.value} className={classname}>
                        </span>
                    );
                })}
            </div>
        );
    }

    render() { // TODO: multi select component is not working, selected it not displayed
        const { pizzaDetails: { dough = '' }} = this.props
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
                    {this.renderTopings()}
                    {/* <Select
                        placeholder='Select a toping'
                        className='topings-selection'
                        isMulti
                        value={topings}
                        onChange={this.onTopingsChange}
                        options={optionsForTopings} /> */}
                </section>
            </section>
        )
    }
}

PizzaDetails.propTypes = {
    pizzaDetails: PropTypes.shape({
        dough: PropTypes.string,
        topings: PropTypes.array
    }),
    onPizzaDetailsChange: PropTypes.func
}

export default PizzaDetails