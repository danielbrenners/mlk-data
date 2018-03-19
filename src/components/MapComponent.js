import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import demoFancyMapStyles from "./demoFancyMapStyles.json";
import styled from "styled-components";

class MapComponent extends Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 33.922756, lng: -118.24306 }}
        defaultZoom={13}
        defaultOptions={{ styles: demoFancyMapStyles }}
      />
    ));
    return (
      <Wrapper>
        <GoogleMapExample
          containerElement={<div style={{ height: "500px" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

export default MapComponent;
