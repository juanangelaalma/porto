import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const NavbarBlog = () => {
  return (
    <Navbar>
      <li className="nav-item pr-3 pb-2">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item d-flex pb-2">
        <Link to="/blogs" className="btn px-4 text-white">
          My Blog
        </Link>
      </li>
    </Navbar>
  );
};

export default NavbarBlog;
