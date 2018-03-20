import React, { Component } from "react";
import { withGoogleMap, GoogleMap, KmlLayer } from "react-google-maps";
import demoFancyMapStyles from "./demoFancyMapStyles.json";
import styled from "styled-components";

const hcc =
  "https://raw.githubusercontent.com/danielbrenners/mlk-data/master/src/data/HCC/Site_HCC_CA.kml";
const hspa_primary =
  "https://raw.githubusercontent.com/danielbrenners/mlk-data/master/src/data/HSPA/CA/HPSA_Points_Primary_Care_CA.kml";
const hspa_mental =
  "https://raw.githubusercontent.com/danielbrenners/mlk-data/master/src/data/HSPA/CA/HPSA_Points_Mental_Health_CA.kml";
const hspa_dental =
  "https://raw.githubusercontent.com/danielbrenners/mlk-data/master/src/data/HSPA/CA/HPSA_Points_Dental_Health_CA.kml";

class MapComponent extends Component {
  render() {
    const KmlLayers = [];

    if (this.props.showHCC == true) {
      KmlLayers.push(
        <KmlLayer url={hcc} options={{ preserveViewport: true }} />
      );
    }
    if (this.props.hspa_primary == true) {
      KmlLayers.push(
        <KmlLayer
          url={hspa_primary}
          options={{ preserveViewport: true }}
          z-index={1000}
        />
      );
    }

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 33.922756, lng: -118.24306 }}
        defaultZoom={11}
        defaultOptions={{ styles: demoFancyMapStyles }}
      >
        <KmlLayer url={hspa_primary} options={{ preserveViewport: true }} />
        <KmlLayer url={hspa_mental} options={{ preserveViewport: true }} />
        <KmlLayer url={hspa_dental} options={{ preserveViewport: true }} />
        {/*<KmlLayer url={hcc} options={{ preserveViewport: true }} />*/}
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
