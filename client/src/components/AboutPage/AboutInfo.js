import React from "react";
import { Link } from "react-router-dom";

const AboutInfo = ({ about }) => {
  return (
    <Link to={`/about/${about._id}`}>
      <div className="about_info">
        <div className="about_info_1">
          <div className="about_flex">
            <div className="about_info_2">
              <h2>{about.title}</h2>
              <p>{about.description.substring(0, 650)}..</p>
            </div>
            <img src={about.images} alt={about.title} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AboutInfo;
