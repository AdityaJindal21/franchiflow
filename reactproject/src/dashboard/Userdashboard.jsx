import { Routes, Route } from 'react-router-dom';
import React from "react";
import Sidebar from "./Sidebar";
import Allapplications from '../applications/Allapplications';
// import SalesData from "./Sales/SalesData";
// import SalesHistory from "./Sales/SalesHistory";
// import LoginForm from "../applicantprofile/LoginForm";
// import Charts from "./charts/Charts";
// import { Settings } from 'lucide-react';

function Userdashboard() {
  return (
    <div className="flex bg-gray-100">
      {/* Persistent Sidebar */}
      <div className="w-64 min-h-screen">
        <Sidebar />
      </div>
      
      {/* Main Content Area */}
      <div className="bg-grey-100 w-full min-h-screen">
        {/* <Routes> */}
          {/* Dashboard home page */}
          {/* <Route path="/hello" element={<Allapplications/>} /> */}
          
          {/* Other routes */}
          {/* <Route path="/totalsales" element={<SalesData />} /> */}
          {/* <Route path="/sales-history" element={<SalesHistory />} /> */}
          {/* <Route path="/charts" element={<Charts />} /> */}
          {/* <Route path="/settings" element={<div><Settings /></div>} /> */}
          {/* <Route path="/logout" element={<LoginForm />} /> */}
        {/* </Routes> */}
      </div>
    </div>
  );
}

export default Userdashboard;