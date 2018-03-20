import React, { Component } from "react";
import logo from "./images/gfl-mlk.png";
import "./App.css";

import MapComponent from "./components/MapComponent";

class App extends Component {
  state = {
    showHCCMobile: true,
    showHCCPermanent: true
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <MapComponent
          showHCCMobile={this.state.showHCCMobile}
          showHCCPermanent={this.state.showHCCPermanent}
        />
      </div>
    );
  }
}

export default App;
