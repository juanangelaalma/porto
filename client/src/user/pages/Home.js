import React, { useEffect, useState } from "react";
import "../styles/shapes.css";
import "../styles/index.css"

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    startParralax()
  }, []);

  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};


const startParralax = () => {
  if(window.innerWidth > 400) {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      this.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        // when scroll is under 700 the shape will stop
        if(window.scrollY < 700) {
          layer.style.transform = `translateX(${x}px) translate(${y}px)`;
        }
      });
    }
  }
}

export default Home;
