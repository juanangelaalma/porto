import React from 'react'

const Resume = () => {
  return (
    <section id="resume" className="resume">
        <div data-aos="fade-up" data-aos-duration={700} className="container py-5">
          <img className="icon-title" src="/assets/icons/rectangles.svg" />
          <p className="text-center text-white text-title">Resume</p>
          <div className="row justify-content-center px-0 py-4">
            <div className="col-md-8">
              <div className="box-resume p-4">
                <div className="container mt-5 mb-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10">
                      <h3 className="text-white">Education</h3>
                      <ul className="timeline">
                        <li className="ml-4">
                          <p className="m-0"><i className="fa fa-graduation-cap" /> 2020 - present</p>
                          <h1 className="text-white">University</h1>
                          <p>University of Surabaya</p>
                        </li>
                        <li className="ml-4">
                          <p className="m-0"><i className="fa fa-graduation-cap" /> 2017 - 2020</p>
                          <h1 className="text-white">Vocational High School</h1>
                          <p>SMK Negeri 1 Boyolangu</p>
                        </li>
                        <li className="ml-4">
                          <p className="m-0"><i className="fa fa-graduation-cap" /> 2014 - 2017</p>
                          <h1 className="text-white">Junior High School</h1>
                          <p>SMP Negeri 4 Tulungagung</p>
                        </li>
                        <li className="ml-4">
                          <p className="m-0"><i className="fa fa-graduation-cap" /> 2008 - 2014</p>
                          <h1 className="text-white">Elementary School</h1>
                          <p>SD Negeri 2 Kauman</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Resume
