import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const SideBar = ({ isOpenSidebar }) => {
  return (
    <aside className={isOpenSidebar ? 'seen' : 'hidden'}>
      <div className="sidebar">
        <Link className="brand" to='/'>
          ALMA<span>.</span>
        </Link>
        <div className="side-links d-flex w-100 py-2">
          <Link to="/admin/dashboard" className="side-item py-2 px-5">
            <i class="fas fa-tachometer-alt mr-2"></i> Dashboard
          </Link>
          <Link to="/admin/blog" className="side-item py-2 px-5">
            <i class="fas fa-pencil-alt mr-2"></i> Blog
          </Link>
          <Link to="/admin/category" className="side-item py-2 px-5">
            <i class="fas fa-list mr-2"></i> Category
          </Link>
          <Link to="/admin/profile" className="side-item py-2 px-5">
            <i class="fas fa-user-lock mr-2"></i> Profile
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
