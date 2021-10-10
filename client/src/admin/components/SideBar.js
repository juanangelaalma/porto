import React from "react";
import "../styles/sidebar.css";

const SideBar = ({ isOpenSidebar }) => {
  return (
    <aside className={isOpenSidebar ? 'seen' : 'hidden'}>
      <div className="sidebar">
        <a className="brand" href="#">
          ALMA<span>.</span>
        </a>
        <div className="side-links d-flex w-100 py-2">
          <a href="" className="side-item py-2 px-5">
            <i class="fas fa-tachometer-alt mr-2"></i> Dashboard
          </a>
          <a href="" className="side-item py-2 px-5">
            <i class="fas fa-pencil-alt mr-2"></i> Blog
          </a>
          <a href="" className="side-item py-2 px-5">
            <i class="fas fa-list mr-2"></i> Category
          </a>
          <a href="" className="side-item py-2 px-5">
            <i class="fas fa-user-lock mr-2"></i> Profile
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
