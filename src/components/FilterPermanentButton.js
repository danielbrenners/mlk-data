import React, { Component } from "react";
import styled from "styled-components";

class FilterPermanentButton extends Component {
  render() {
    return (
      <Button onClick={this.props.handleToggleHCCPermanent}>
        {this.props.label}
      </Button>
    );
  }
}

const Button = styled.button``;

export default FilterPermanentButton;
