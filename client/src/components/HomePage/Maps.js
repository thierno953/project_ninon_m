import React, { useEffect, useState } from "react";
import "./Maps.css";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import { Room } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getPin } from "../../redux/actions/pinAction";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";

const Maps = () => {
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const dispatch = useDispatch();
  const { pins } = useSelector((state) => state.pins);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "35vh",
    latitude: 50.85034,
    longitude: 4.35171,
    zoom: 12,
  });

  const navControlStyle = {
    left: 10,
    top: 10,
  };

  useEffect(() => {
    dispatch(getPin());
  }, [dispatch, currentPlaceId]);

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  return (
    <div className="container">
      <div className="maps">
        <Card>
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={
              "pk.eyJ1IjoidGhpZXJubzEyMzQiLCJhIjoiY2t1OGk3aXFkMGFrbzJwb2o3MG9tb2c4MyJ9.H5A8iQd0x_1LXqTi4YTzqA"
            }
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            mapStyle="mapbox://styles/thierno1234/ckxbz0wvbdcsk14o3xdo085bn"
            className="map"
          >
            {pins.map((p) => (
              <Link className="pinCard" to={`/pin/${p._id}`}>
                <Marker
                  latitude={p.lat}
                  longitude={p.long}
                  offsetLeft={-20}
                  offsetTop={-10}
                >
                  <Room
                    style={{ fontSize: viewport.zoom * 2, color: "blue" }}
                    onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
                    className="marker"
                  />
                </Marker>
              </Link>
            ))}
            <NavigationControl style={navControlStyle} />
          </ReactMapGL>
        </Card>
       <div className="mapInfo">
       <h2>PRÉSENTATION GÉNÉRAL DU PROJET</h2>
        <p>
     
          Cartographie sans-papiers, est un
          projet que je développe depuis 4 ans, de manière collaborative, avec
          des citoyens sans-papiers, habitant Bruxelles depuis plus ou moins
          longtemps, et ayant vécu ou vivant encore l’expérience de
          l’occupation. La précarité et l’inexistence de droits pour les
          personnes sans-papiers, contraints nombre d’entre eux à vivre dans des
          « squat », lieux vides occupés sans loyer. Et à s’y organiser en
          communauté, afin de survivre. (trouver de la nourriture, construire un
          réseau de soutien, s’entendre et rencontrer les voisins, vivre avec le
          quartier…). Cette organisation, souvent en total autonomie, est pour
          moi un modèle de civilisation utopique, qui résiste contre des
          politiques violentes et anti-sociales.
      
        </p>
        </div>
      </div>
    </div>
  );
};

export default Maps;
