import React from "react";
import ReactDOM from "react-dom";
// import FillBar from './components/fillBar'
import { UserDetails } from './components'
import { PizzaDetails } from './components'

import './index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.submitOrder = this.submitOrder.bind(this);
    this.onUserDetailsChange = this.onUserDetailsChange.bind(this);
    this.onPizzaDetailsChange = this.onPizzaDetailsChange.bind(this);
    this.state = {
      orderDetail: {
        dough: '',
        topings: []
      },
      userDetails: {
        name: '',
        address: {
            city: '',
            streatAddress: ''
        }
      }
    }
  }

  onUserDetailsChange(userDetails) {
    const { name, address: { city, streatAddress} } = this.state.userDetails;
    
  }
  onPizzaDetailsChange(pizzaDetails) {
    const { orderDetail } = this.state;
    
  }
  submitOrder() {

  }
  render() {

    return (
      <div className='main'>
        <h1>
          <label>
              Pizza Party
            </label>
          <span className='logo'></span>
        </h1>
        <div className='content'>
          <section>
            <UserDetails />
          </section>
          <section>
            <PizzaDetails/>
          </section>
          <button onClick={this.submitOrder}/>
        </div>
    </div>
  );

  }
};

ReactDOM.render(<App />, document.getElementById("index"));