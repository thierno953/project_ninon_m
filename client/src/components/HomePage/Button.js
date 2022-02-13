import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ text, btnClass, href }) => {
  return (
    <Link to={href} className={`btn ${btnClass}`}>
      {text}
    </Link>
  );
};

export default Button;
