import parks from "./geojson/parks.json";
import hospitals from "./geojson/hospitals.json";
import schools from "./geojson/schools.json";

function getPolygons(geoJson) {
    let polygons = [];

    for (let a = 0; a < geoJson.features.length; a++) {
        let currentPolygon = {};

        currentPolygon["name"] = geoJson.features[a].properties.NAME;

        const subPolygonCoordinatesJSON = geoJson.features[a].geometry.coordinates;

        if (geoJson.features[a].geometry.type === "MultiPolygon") {
            for (let i = 0; i < subPolygonCoordinatesJSON.length; i++) {
                for (let j = 0; j < subPolygonCoordinatesJSON[i].length; j++) {
                    for (let k = 0; k < subPolygonCoordinatesJSON[i][j].length; k++) {
                        subPolygonCoordinatesJSON[i][j][k] = {
                            lat: subPolygonCoordinatesJSON[i][j][k][0],
                            lng: subPolygonCoordinatesJSON[i][j][k][1]
                        };
                    }
                }
            }
        } else {
            for (let i = 0; i < subPolygonCoordinatesJSON.length; i++) {
                for (let j = 0; j < subPolygonCoordinatesJSON[i].length; j++) {
                    subPolygonCoordinatesJSON[i][j] = {
                        lat: subPolygonCoordinatesJSON[i][j][0],
                        lng: subPolygonCoordinatesJSON[i][j][1]
                    };
                }
            }
        }

        currentPolygon["coordinates"] = subPolygonCoordinatesJSON;
        polygons.push(currentPolygon);
    }

    return polygons;
}

const parkPolygons = getPolygons(parks);
const hospitalPolygons = getPolygons(hospitals);
const schoolPolygons = getPolygons(schools);

export { parkPolygons, hospitalPolygons, schoolPolygons };





