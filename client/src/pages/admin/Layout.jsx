import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/admin/AdminNavbar";
import AdminSidebar from "../../components/admin/AdminSidebar";

const Layout = () => {
  return (
    <>
    
      {/* Top Navbar */}
      <AdminNavbar />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {/* <div className="w-64 bg-white border-r border-gray-200"> */}
          <AdminSidebar />
          <div className="fex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)]overflow-y-auto">
          <Outlet />
        </div>
      </div>

    </>
  );
};

export default Layout;

