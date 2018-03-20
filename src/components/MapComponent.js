import React, { Component } from "react";
import { withGoogleMap, GoogleMap, KmlLayer } from "react-google-maps";
import demoFancyMapStyles from "./demoFancyMapStyles.json";
import styled from "styled-components";

const hcc_all =
  "https://raw.githubusercontent.com/danielbrenners/mlk-data/master/src/data/HCC/Site_HCC_CA.kml";
const hcc_mobile =
  "https://raw.githubusercontent.com/danielbrenners/mlk-data/master/src/data/HCC/hcc_mobile.kml";
const hcc_permanent =
  "https://raw.githubusercontent.com/danielbrenners/mlk-data/master/src/data/HCC/hcc_permanent.kml";

class MapComponent extends Component {
  render() {
    const KmlLayers = [];

    if (this.props.showHCCPermanent == true) {
      KmlLayers.push(
        <KmlLayer url={hcc_permanent} options={{ preserveViewport: true }} />
      );
    }
    if (this.props.showHCCMobile == true) {
      KmlLayers.push(
        <KmlLayer url={hcc_mobile} options={{ preserveViewport: true }} />
      );
    }

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 33.922756, lng: -118.24306 }}
        defaultZoom={13}
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
