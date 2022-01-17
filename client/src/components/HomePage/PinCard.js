import React from "react";
import { Link } from "react-router-dom";

const PinCard = ({ pin }) => {
  return (
    <div className="pinCard">
    <Link className="pinCard" to={`/pin/${pin._id}`}>
      <img src={pin.images[0].url} alt={pin.title} />
      <p>{pin.title}</p>
      {/* <p>{pin.description}</p>
      <p>{pin.property_address}</p> */}
    </Link>
    
    </div>
  );
};

export default PinCard;
