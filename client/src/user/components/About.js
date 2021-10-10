import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div data-aos="fade-up" data-aos-duration={700} className="container py-5">
        <img className="icon-title" src="/assets/icons/rectangles.svg" />
        <p className="text-center text-white text-title">About me</p>
        <div className="row px-0 py-5">
          <div className="col-md-4 col-sm-12 mb-3">
            <div className="img-place">
              <img src="/assets/images/about.jpeg" alt="Juan Angela Alma" />
            </div>
          </div>
          <div className="col-md-8 col-sm-12 mb-3">
            <div className="info">
              <div className="row">
                <div className="description col-md-6">
                  <p>
                    I am Juan Angela Alma, web developer from Jawa, Indonesia. I
                    have experience with website developer and graphic design in
                    development and customization.
                  </p>
                  <a className="btn download-cv text-white px-4 mt-3">
                    Download CV
                  </a>
                </div>
                <div className="skill col-md-6">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-8 text-left text-white">
                        UI/UX design
                      </div>
                      <div className="col text-right text-white">70%</div>
                      <div className="col-md-12">
                        <div className="progress mt-3">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "70%", height: "100%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 text-left text-white">
                        Web development
                      </div>
                      <div className="col text-right text-white">80%</div>
                      <div className="col-md-12">
                        <div className="progress mt-3">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "80%", height: "100%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 text-left text-white">
                        Android
                      </div>
                      <div className="col text-right text-white">30%</div>
                      <div className="col-md-12">
                        <div className="progress mt-3">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "30%", height: "100%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
