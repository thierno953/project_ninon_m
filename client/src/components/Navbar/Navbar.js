import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { scroller } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { AiFillCaretDown } from "react-icons/ai";
import { logout } from "../../redux/actions/userAction";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const alert = useAlert();

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 200) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 50,
      smooth: true,
      offset: -80,
    });
  };

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };


  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="header_container">
        <Link to="/">
          <h1>NINON</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li onClick={() => scrollToElement("Header")}>
            <Link to="/" onClick={handleClick}>
            Header
            </Link>
          </li>
          <li onClick={() => scrollToElement("About")}>
            <Link to="/" onClick={handleClick}>
            About
            </Link>
          </li>
          <li onClick={() => scrollToElement("Maps")}>
            <Link to="/" onClick={handleClick}>
              Maps
            </Link>
          </li>
          <li onClick={() => scrollToElement("Contact")}>
            <Link to="/" onClick={handleClick}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login">
              {user ? (
                <div className="dropdown">
                  <figure className="profile">
                    <p> {user && user.name}</p>
                    <AiFillCaretDown className="AiFillCaretDown" />
                  </figure>
                  <div className="dropdown-content">
                    {user && user.role !== "admin" ? (
                      <div>
                        <Link to="/" className="link" onClick={handleClick}>
                        Home
                        </Link>
                      </div>
                    ) : (
                      <Link
                        to="/admin/dashboard"
                        className="link"
                        onClick={handleClick}
                      >
                        Admin
                      </Link>
                    )}
                   
                    <button className="logout_btn" onClick={handleClick}>
                      <Link to="/" className="logout" onClick={logoutHandler}>
                        Logout
                      </Link>
                    </button>
                  </div>
                </div>
              ) : (
                !loading && (
                  <div className="btn-group">
                    <button className="btns">
                      {" "}
                      <Link to="/login" onClick={handleClick}>
                        Sign In
                      </Link>
                    </button>
                  </div>
                )
              )}
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
