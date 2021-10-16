import React from "react";
import "../styles/navbar.css";

const Navbar = ({ menu, children, isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <nav
      className="navbar navbar-expand-lg p-0 navbar-dark position-fixed"
      style={{ width: isOpenSidebar ? "80%" : "100%" }}
    >
      {menu ? (
        <button
          className="navbar-toggler d-flex align-items-center custom-navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsOpenSidebar(!isOpenSidebar)}
        >
          <span
            className={
              isOpenSidebar ? "fas fa-ellipsis-h vertical" : "fas fa-ellipsis-h"
            }
          />
        </button>
      ) : (
        ""
      )}
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">{children}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
