import React, { Component } from "react";
import styled from "styled-components";

class FilterMobileButton extends Component {
    render() {
        return (
            <Button onClick={this.props.handleToggleHCCMobile}>
                {this.props.label}
            </Button>
        );
    }
}

const Button = styled.button``;

export default FilterMobileButton;
