import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
    <div data-aos="fade-up" data-aos-duration="700" className="container py-5">
      <img className="icon-title" src="assets/icons/rectangles.svg" />
      <p className="text-center text-white text-title">Skills</p>
      <div className="row">
        <div className="col-md-4 col-6 d-flex justify-content-center py-4">
          <object data="assets/logo/html5-brands.svg" className="w-25" />
        </div>
        <div className="col-md-4 col-6 d-flex justify-content-center py-4">
          <object data="assets/logo/css3-alt-brands.svg" className="w-25" />
        </div>
        <div className="col-md-4 col-6 d-flex justify-content-center py-4">
          <object data="assets/logo/js-square-brands.svg" className="w-25" />
        </div>
        <div className="col-md-4 col-6 d-flex justify-content-center py-4">
          <object data="assets/logo/react-brands.svg" className="w-25" />
        </div>
        <div className="col-md-4 col-6 d-flex justify-content-center py-4">
          <object data="assets/logo/node-brands.svg" className="w-25" />
        </div>
        <div className="col-md-4 col-6 d-flex justify-content-center py-4">
          <object data="assets/logo/mysql-svgrepo-com.svg" className="w-25" />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Skills;
