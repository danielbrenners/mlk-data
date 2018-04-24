import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import MapStyle from "../data/MapStyles/GFLMapStyle.json";
import { Circle, Marker, Polygon } from "react-google-maps";
import icon from "../data/icons/test-icon.png";
import { parkPolygons, hospitalPolygons, schoolPolygons } from "../data/GeoJSONtoPolygonPath";

class MapComponent extends Component {
  render() {
    console.log(parkPolygons[0]["name"]);
    console.log(parkPolygons[0]["coordinates"]);

    const triangleCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 }
    ];

    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 33.922756, lng: -118.24306 }}
        defaultZoom={13}
        defaultOptions={{ styles: MapStyle }}
      >
        <Circle defaultCenter={{ lat: 33.922756, lng: -118.24306 }} radius={333} options={{ fillColor: "blue" }} />
        <Marker position={{ lat: 33.922756, lng: -118.24306 }} icon={{ url: icon }} />

        <Polygon path={triangleCoords} />
      </GoogleMap>
    ));

    return (
      <GoogleMapExample
        containerElement={<div style={{ height: "500px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    );
  }
}

export default MapComponent;
