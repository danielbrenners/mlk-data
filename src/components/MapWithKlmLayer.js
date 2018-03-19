import React from "react";
import HPSA_Area_Mental_Health from "../data/HPSA_Area_Mental_Health.kml";
import HPSA_Points_Mental_Health from "../data/HPSA_Points_Mental_Health.kml";
import ChicagoTransitMap from "../data/ChicagoTransitMap.kml";

const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  KmlLayer
} = require("react-google-maps");

const MapWithKmlLayer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={9} defaultCenter={{ lat: 41.9, lng: -87.624 }}>
    <KmlLayer url={ChicagoTransitMap} options={{ preserveViewport: true }} />
  </GoogleMap>
));

export default MapWithKmlLayer;
