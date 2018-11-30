import React, { Component } from "react";
import axios from "axios";

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: ""
  };
  async fetchValues() {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  }
  async fetchIndexes() {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({ seenIndexes: seenIndexes.data });
  }
  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(", ");
  }
  renderSeenValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For Index {key} I calculated {this.state.values[key]}
        </div>
      );
    }
  }
  handleSubmit = async event => {
    event.preventDefault();

    await axios.post("api/values", {
      index: this.state.index
    });
    this.setState({ index: "" });
  };
  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="enterIndex">Enter your index</label>
          <input
            id="enterIndex"
            value={this.state.index}
            onChange={event => this.setState({ index: event.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <h3>Indexes I have Seen:</h3>
        {this.renderSeenIndexes()}

        <h3>Calculated Values:</h3>
        {this.renderSeenValues()}
      </div>
    );
  }
}

export default Fib;
