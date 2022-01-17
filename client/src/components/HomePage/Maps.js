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
    height: "50vh",
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
        <div className="map_info">
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500, quand
            un imprimeur anonyme assembla ensemble des morceaux de texte pour
            réaliser un livre spécimen de polices de texte. Il n'a pas fait que
            survivre cinq siècles, mais s'est aussi adapté à la bureautique
            informatique, sans que son contenu n'en soit modifié. Il a été
            popularisé dans les années 1960 grâce à la vente de feuilles
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment,
            par son inclusion dans des applications de mise en page de texte,
            comme Aldus PageMaker.
          </p>
        </div>

        <Card container>
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
      </div>
    </div>
  );
};

export default Maps;
