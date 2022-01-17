import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_all">
        <div className="container">
          <div className="col col-1">
            <h1>
              TM<span className="primary">B</span>
            </h1>
          </div>
          <div className="col">
            <h5>Contact</h5>
            <span className="bar"></span>
            <p>thiernobarry554@gmail.com </p>
            <p>+32 466 240 103</p>
          </div>
          <div className="col">
            <h5>Frontend</h5>
            <span className="bar"> </span>
            <p>Html</p>
            <p>Css</p>
            <p>JavaScript</p>
            <p>React</p>
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
