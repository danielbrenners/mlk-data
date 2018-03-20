import React, { Component } from "react";
import { withGoogleMap, GoogleMap, KmlLayer } from "react-google-maps";
import demoFancyMapStyles from "./demoFancyMapStyles.json";
import styled from "styled-components";

const hcc =
  "https://raw.githubusercontent.com/danielbrenners/mlk-data/master/src/data/HCC/Site_HCC_CA.kml";

class MapComponent extends Component {
  render() {
    const KmlLayers = [];

    if (this.props.showHCC == true) {
      KmlLayers.push(
        <KmlLayer url={hcc} options={{ preserveViewport: true }} />
      );
    }

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 33.922756, lng: -118.24306 }}
        defaultZoom={11}
        defaultOptions={{ styles: demoFancyMapStyles }}
      >
        {KmlLayers}
      </GoogleMap>
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
