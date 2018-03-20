import React from "react";
import demoFancyMapStyles from "./demoFancyMapStyles.json";

const hcc =
  "https://raw.githubusercontent.com/danielbrenners/mlk-data/master/src/data/HCC/Site_HCC_CA.kml";
const hspa_dental =
  "https://raw.githubusercontent.com/danielbrenners/mlk-data/master/src/data/HSPA/CA/HPSA_Points_Dental_Health_CA.kml";
const hspa_mental =
  "https://raw.githubusercontent.com/danielbrenners/mlk-data/master/src/data/HSPA/CA/HPSA_Points_Mental_Health_CA.kml";
const hspa_primary =
  "https://raw.githubusercontent.com/danielbrenners/mlk-data/master/src/data/HSPA/CA/HPSA_Points_Primary_Care_CA.kml";

const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  KmlLayer
} = require("react-google-maps");

const MapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCIOszH9f4EnVwfp-LF-K7mMwRvJ0armjU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: "500px" }} />,
    mapElement: <div style={{ height: "75%" }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultCenter={{ lat: 33.922756, lng: -118.24306 }}
    defaultZoom={13}
    defaultOptions={{ styles: demoFancyMapStyles }}
  >
    <KmlLayer url={hcc} options={{ preserveViewport: true }} />
  </GoogleMap>
));

export default MapComponent;
