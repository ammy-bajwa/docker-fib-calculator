import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fib from "./Fib";
import OtherPage from "./OtherPage";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <header>
            <h1>Home</h1>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            <Route exact={true} path="/" component={Fib} />
            <Route exact={true} path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
