import React, { Component } from "react";
import logo from "./images/gfl-mlk.png";
import "./App.css";

import MapComponent from "./components/MapComponent";
import FilterPermanentButton from "./components/FilterPermanentButton";
import FilterMobileButton from "./components/FilterMobileButton";

class App extends Component {
  state = {
    showHCCMobile: true,
    showHCCPermanent: true
  };

  handleToggleHCCPermanent = () => {
    this.setState({ showHCCPermanent: !this.state.showHCCPermanent });
  };

  handleToggleHCCMobile = () => {
    this.setState({ showHCCMobile: !this.state.showHCCMobile });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <MapComponent showHCCMobile={this.state.showHCCMobile} showHCCPermanent={this.state.showHCCPermanent} />
        <FilterPermanentButton handleToggleHCCPermanent={this.handleToggleHCCPermanent} label="Toggle Permanent" />
        <FilterMobileButton handleToggleHCCMobile={this.handleToggleHCCMobile} label="Toggle Mobile" />
      </div>
    );
  }
}

export default App;
