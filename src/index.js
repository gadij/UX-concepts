import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from './modules/main';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    )
  }
};

ReactDOM.render(<App />, document.getElementById("index"));