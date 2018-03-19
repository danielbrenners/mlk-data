import React, { Component } from "react";
import logo from "./images/gfl-mlk.png";
import "./App.css";

import MapWithKlmLayer from "./components/MapWithKlmLayer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <MapWithKlmLayer />
      </div>
    );
  }
}

export default App;
