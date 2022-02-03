import React, { useState } from "react";
import './Navbar.css';
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../redux/actions/userAction";
import { AiFillCaretDown } from "react-icons/ai";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));
  
  const { user, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const alert = useAlert();

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };

  return (
    <>
      <Nav>
        <div className="brand">
          <h2>THIERNO</h2>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul className="links">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="active">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="active">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login">
              {user ? (
                <div className="dropdown">
                  <figure className="profile">
                    {user && user.name}
                    <AiFillCaretDown className="AiFillCaretDown" />
                  </figure>
                  <div className="dropdown-content">
                    {user && user.role !== "admin" ? (
                      <div>
                        <Link to="/orders" className="link">
                        Orders
                        </Link>
                      </div>
                    ) : (
                      <Link
                        to="/admin/dashboard"
                        className="link"
                      
                      >
                        Admin
                      </Link>
                    )}
                 
                    <button>
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
                      <Link to="/login">
                        Sign In
                      </Link>
                    </button>
                  </div>
                )
              )}
            </Link>
          </li>
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <a
              href="#home"
              className="active"
              onClick={() => setNavbarState(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              Our Services
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setNavbarState(false)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#products" onClick={() => setNavbarState(false)}>
              Products
            </a>
          </li>
          <li>
            <a href="#newsletter" onClick={() => setNavbarState(false)}>
              Newsletter
            </a>
          </li>
          <li>
            <Link to="/login">
              {user ? (
                <div className="dropdown">
                  <figure className="profile">
                    {user && user.name}
                    <AiFillCaretDown className="AiFillCaretDown" />
                  </figure>
                  <div className="dropdown-content">
                    {user && user.role !== "admin" ? (
                      <div>
                        <Link to="/orders" className="link">
                        Orders
                        </Link>
                      </div>
                    ) : (
                      <Link
                        to="/admin/dashboard"
                        className="link"
                      
                      >
                        Admin
                      </Link>
                    )}
                
                    <button>
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
                      <Link to="/login">
                        Sign In
                      </Link>
                    </button>
                  </div>
                )
              )}
            </Link>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 4vw;
  .brand {
    img {
      margin-top: 1rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: #fc4958;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #f9c74f;
        }
      }
      .active {
        color: #f9c74f;
      }
    }
  }
  @media screen and (min-width: 100px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #f9c74f;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }
      &:first-of-type {
        a {
          color: #fc4958;
          font-weight: 900;
        }
      }
    }
  }
`;