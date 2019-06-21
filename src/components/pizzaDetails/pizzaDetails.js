import React from "react";
import Multiselect from 'multiselect-dropdown-react';
import '../style/form.scss';

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
        this.state = {
            dough: '',
            topings: []
        }
        this.doughChange = this.doughChange.bind(this);
        this.onTopingsChange = this.onTopingsChange.bind(this);
        this.formAction = this.formAction.bind(this);
    }

    formAction(event) {
        event.preventDefault();
        console.log(`Dough: ${this.state.dough}`)
        console.log(`Topings: ${this.state.topings}`)
    }

    doughChange(event) {
        this.setState({
            dough: event.target.value
        })
    }

    onTopingsChange(values) {
        // const value = event.target.value;
        // const topings = this.state.topings;
        // if (topings.find((item) => {
        //     item !== value
        //     topings.push(value);
        // }))
        this.setState({ topings: values });
    }

    render() {
        // const { formAction } = this.props
        const { dough, topings } = this.state
        return (
            <form className="form">
                <div className="content">
                    <label>
                        Dough:
                    </label>
                    <input type="text" name="dough" value={dough} onChange={this.doughChange} />
                </div>
                <div className="topings content">
                    <label>
                        Topings:
                    </label>
                    <Multiselect options={optionsForTopings} onSelectOptions={this.onTopingsChange} />
                    {/* <input type="text" name="topings" value={topings} onChange={this.topingsChange} /> */}
                </div>
                <input type="submit" value="Submit" onClick={this.formAction} />
            </form>
        )
    }
}

export default PizzaDetails