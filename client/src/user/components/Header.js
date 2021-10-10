import React, { useEffect } from "react";
import Typed from "typed.js";
import { Link } from 'react-router-dom'

import Navbar from "./Navbar";

const Header = () => {
  useEffect(() => {
    const type = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
      loop: true,
    });
  }, []);

  return (
    <section id="header">
      <div className="container">
        <Navbar>
          <li className="nav-item pr-3 pb-2">
            <a href="#header" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item pr-3 pb-2">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item pr-3 pb-2">
            <a href="#resume" className="nav-link">
              Resume
            </a>
          </li>
          <li className="nav-item pr-3 pb-2">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item d-flex pb-2">
            <Link to="/blogs" className="btn px-4 text-white">
              My Blog
            </Link>
          </li>
        </Navbar>
        {/* JUMBOTRON */}
        <div className="jumbotron px-0">
          <div className="row">
            <div className="col-md-7">
              <h1 className="display-4 text-white">I'm</h1>
              <h1 className="display-4 text-white">Juan Angela Alma</h1>
              <div id="typed-strings">
                <p> UI/UX designer</p>
                <p> programmer</p>
                <p> student</p>
                <p> web developer</p>
              </div>
              <p id="typed" className="lead d-inline-block" />
              <br />
              <a href="#contact" className="btn btn-lg">
                Hire me
              </a>
              <h4 className="mt-5">My social media</h4>
              <div className="social-media mt-3">
                <a
                  target="__blank"
                  href="https://www.instagram.com/juan.almaa/"
                  className="text-white mr-2"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  target="__blank"
                  href="https://www.facebook.com/juan.alma.395017"
                  className="text-white mr-2"
                >
                  <i className="fab fa-facebook" />
                </a>
                <a
                  target="__blank"
                  href="https://github.com/juanangelaalma"
                  className="text-white mr-2"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  target="__blank"
                  href="https://wa.me/083111064486"
                  className="text-white mr-2"
                >
                  <i className="fab fa-whatsapp" />
                </a>
                <a
                  target="__blank"
                  href="https://www.linkedin.com/in/juan-angela-alma-6857741b6"
                  className="text-white mr-2"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
            <div className="col-md-5 position-relative p-0">
              <div className="border w-75 position-relative ml-auto">
                <div
                  data-speed={3}
                  className="layer triangle-1 position-absolute"
                >
                  ▲
                </div>
                <div
                  data-speed={-3}
                  className="layer triangle-2 position-absolute"
                >
                  ▲
                </div>
                <div
                  data-speed={2}
                  className="layer circle-left-1 position-absolute"
                />
                <div
                  data-speed={3}
                  className="layer circle-left-2 position-absolute"
                />
                <div
                  data-speed={2}
                  className="layer circle-left-3 position-absolute"
                />
                <div
                  data-speed="-1.5"
                  className="layer circle-left-4 position-absolute"
                />
                <div
                  data-speed={3}
                  className="layer rhombus-1 position-absolute"
                />
                <div
                  data-speed={-2}
                  className="layer rhombus-2 position-absolute"
                />
                <div
                  data-speed={-1}
                  className="layer rectangle position-absolute"
                />
                <img
                  loading="lazy"
                  data-depth="0.2"
                  className="img-header"
                  src="/assets/images/header.png"
                  alt="Juan Angela Alma"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END OF JUMBOTRON */}
    </section>
  );
};

export default Header;
