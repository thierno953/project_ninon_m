import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import { Room } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getPin } from "../../redux/actions/pinAction";
import { Link } from "react-router-dom";

const Maps = () => {
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const dispatch = useDispatch();
  const { pins } = useSelector((state) => state.pins);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "55vh",
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
    <Section id="portfolio">
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
      </div>
    </Section>
  );
};

const Section = styled.section`
  height: 80vh;
  position: relative;
  border-radius: 5rem;
  &:hover {
    .background {
      img {
        transform: scale(1.2);
      }
    }
  }
  .background {
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    border-radius: 1rem;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
      border-radius: 1rem;
      transition: 0.8s ease-in-out;
    }
  }
  .content {
    position: absolute;
    top: 25%;
    left: 10%;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    h1 {
      font-size: 3rem;
      width: 60%;
    }
    h2 {
      width: 60%;
    }
    button {
      border: none;
      padding: 1rem 4rem;
      font-size: 1.4rem;
      color: white;
      border-radius: 4rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      background: linear-gradient(to right, #fc4958, #e85d04);
      text-transform: uppercase;
      &:hover {
        background: linear-gradient(to right, #e85d04, #fc4958);
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    /* display: none; */
    .content {
      h1 {
        width: 90%;
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.2em;
        width: 90%;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1rem;
      }
    }
  }
`;

export default Maps;
