import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Detail from "./components/Details/Detail";
import Maps from "./components/HomePage/Maps";
import Header from "./components/HomePage/Header";
import Pin from "./components/HomePage/Pin";
import { Element } from "react-scroll";
import Footer from "./components/Footer/Footer";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import { loadUser } from "./redux/actions/userAction";
import store from "./store";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Admin/Dashboard";
import PinList from "./components/Admin/PinList";
import NewPin from "./components/Admin/NewPin";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Navbar />
      <Element className="Header">
      <Route exact path="/" component={Header} />
      </Element>
      <Element className="Pin">
        <Route exact path="/" component={Pin} />
      </Element>
    
      <Element className="Maps">
        <Route exact path="/" component={Maps} />
      </Element>

      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <ProtectedRoute exact path="/admin/dashboard" isAdmin={true} component={Dashboard} />
      <ProtectedRoute exact path="/admin/pins" isAdmin={true} component={PinList} />
      <ProtectedRoute exact path="/admin/pin/new" isAdmin={true} component={NewPin} />
      <Route exact path="/pin/:id" component={Detail} />
    


       <Footer /> 
    </Router>
  );
}

export default App;
