import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Detail from "./components/Details/Detail";
import Maps from "./components/HomePage/Maps";
import Header from "./components/HomePage/Header";
import Pin from "./components/HomePage/Pin";
import { Element } from "react-scroll";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Element className="Header">
      <Route exact path="/" component={Header} />
      </Element>
      <Element className="Maps">
      <Route exact path="/" component={Maps} />
      </Element>
      <Element className="Pin">
      <Route exact path="/" component={Pin} />
      </Element>
  
      <Route exact path="/pin/:id" component={Detail} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
