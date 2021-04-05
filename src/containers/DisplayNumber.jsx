import DisplayNumber from "../Components/DisplayNumber";
import React, { Component } from "react";
import store from "../store";

export default class extends Component {
  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.setState({ number: store.getState().number });
    });
  }

  state = { number: store.getState().number }; //맨처음용

  render() {
    return <DisplayNumber number={this.state.number} />;
  }
}
