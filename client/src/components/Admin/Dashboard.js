import React from 'react';
import './Dashboard.css';
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard">
    <div className="dashboard_content">
      <Sidebar />

      <div className="dashboardContainer">
        <h1>
          Total Amount 
        </h1>

        <div className="dashboardSummary">
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Products</p>
              <p>5</p>
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
