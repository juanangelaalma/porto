import React from "react";
import '../styles/navbar.css'

const Navbar = ({ children, isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg p-0 navbar-dark position-fixed" style={{ width: isOpenSidebar ? '80%' : '100%' }}>
      <button
        className={ isOpenSidebar ? "navbar-toggler navbar-toggler-right" : "navbar-toggler" }
        type="button"
        data-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          { children }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
