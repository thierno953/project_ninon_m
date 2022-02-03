import React, { useEffect } from 'react';
import './Dashboard.css';
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminPin } from '../../redux/actions/pinAction';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { pins } = useSelector((state) => state.pins);

  useEffect(() => {
    dispatch(getAdminPin());
  }, [dispatch]);

  return (
    <div className="dashboard">
    <div className="dashboard_content">
     <div className="sidebar">
     <Sidebar className="sidebar" />
     </div>

      <div className="dashboardContainer">
        <h1>
        Dashboard
        </h1>

        <div className="dashboardSummary">
          <div className="dashboardSummaryBox2">
            <Link to="/admin/pins">
              <p>Pins</p>
              <p>{pins && pins.length}</p>
            </Link>
      
            <Link to="/admin/users">
              <p>Users</p>
              <p>4</p>
            </Link>
          </div>
        </div>
     
      </div>
    </div>
  </div>
  )
};

export default Dashboard;
