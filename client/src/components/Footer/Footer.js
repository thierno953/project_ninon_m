import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_all">
        <div className="container">
        
          <div className="col">
            <h5>Partenaires éventuels</h5>
            <span className="bar"></span>
            <p>Collectif d’artistes Bruxellois PTTL</p>
            <p>SOS Migrants</p>
            <p>Point Culture Bruxelles</p>
            <p>Les meutes (Festival des Blockx)</p>
            <p>Pigment asbl</p>
            <p>Douche Flux</p>
            <p>Chez Rosi (imprimerie Riso)</p>
            <p>Medex</p>
          </div>
          <div className="col">
            <h5>Institutions</h5>
            <span className="bar"> </span>
            <p>Globe Aroma</p>
            <p>Centres culturels des diﬀérentes communes</p>
            <p>Le chant des rues</p>
            <p>Inter Environnement Bruxelles</p>
          </div>
          <div className="col">
            <h5>Backend</h5>
            <span className="bar"> </span>
            <p>NodeJS</p>
            <p>ExpressJS</p>
            <p>MongoDB</p>
          </div>
          <div className="col">
            <h5>Social</h5>
            <span className="bar"> </span>
            <a
              href="https://github.com/thierno953"
              target="_blank"
              without
              rel="noreferrer"
            >
              <FaGithub className="icon" />
              Github ( thierno953 )
            </a>
            <a
              href="https://www.linkedin.com/in/thierno-mamadou-barry-0b8527203/"
              target="_blank"
              without
              rel="noreferrer"
            >
              <FaLinkedin className="icon" />
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
