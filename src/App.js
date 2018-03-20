import React, { Component } from "react";
import logo from "./images/gfl-mlk.png";
import "./App.css";

import MapComponent from "./components/MapComponent";

class App extends Component {
  state = {
    showHCC: true,
    showHSPAPrimary: true,
    showHSPAMental: false,
    showHSPADental: true
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <MapComponent
          showHCC={this.state.showHCC}
          showHSPAPrimary={this.state.showHSPAPrimary}
          showHSPAMental={this.state.showHSPAMental}
          showHSPADental={this.state.showHSPADental}
        />
      </div>
    );
  }
}

export default App;
