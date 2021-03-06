import React, { Component } from "react";
import AddNumberRoot from "./Components/AddNumberRoot";
import DisplayNumberRoot from "./Components/DisplayNumberRoot";
import "./App.css";

class App extends Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot />
        <DisplayNumberRoot />
      </div>
    );
  }
}

export default App;
