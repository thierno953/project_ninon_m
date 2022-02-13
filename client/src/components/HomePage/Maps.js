import React, { useEffect, useState } from "react";
import "./Maps.css";
import styled from "styled-components";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import { Room } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getPin } from "../../redux/actions/pinAction";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@material-ui/core";

const Maps = () => {
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const dispatch = useDispatch();
  const { pins } = useSelector((state) => state.pins);

  const [viewport, setViewport] = useState({
    maxWidth: "100%",
    width: "100%",
    height: "30vh",
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
    <div className="container_maps">
      <Section>
        <Card container>
          <CardContent>
            <div className="background">
              <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={
                  "pk.eyJ1IjoidGhpZXJubzEyMzQiLCJhIjoiY2t1OGk3aXFkMGFrbzJwb2o3MG9tb2c4MyJ9.H5A8iQd0x_1LXqTi4YTzqA"
                }
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                mapStyle="mapbox://styles/thierno1234/ckxbz0wvbdcsk14o3xdo085bn"
                className="map"
              >
                {pins.map((p, index) => (
                  <Link className="pinCard" key={index} to={`/pin/${p._id}`}>
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
            </div>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
};

const Section = styled.section`
  max-width: 100%;
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 50px;
  overflow: hidden;
  position: relative;
  .background {
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    width: 100%;
    .map {
      object-fit: cover;
      position: fixed;
      width: 100%;
      height: 100%;
      filter: brightness(90%);
    }
  }
`;

export default Maps;
