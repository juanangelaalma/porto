import React from "react";

import "./styles.css";

const Login = () => {
  return (
    <div className="container login-page">
      <div className="row justify-content-center align-items-center">
        <div className="card">
          <p className="brand text-center" href="#">
            ALMA<span>.</span>
          </p>
          <form action="">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" className="form-control" />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" />
            <button type="submit" className="btn px-4 text-white">
              Login
            </button>
          </form>
        </div>
        <Shapes />
      </div>
    </div>
  );
};

const Shapes = () => {
  return (
    <>
      <div className="layer triangle-1 position-absolute">▲</div>
      <div className="layer triangle-2 position-absolute">▲</div>
      <div className="layer circle-left-1 position-absolute" />
      <div className="layer circle-left-2 position-absolute" />
      <div className="layer circle-left-3 position-absolute" />
      <div className="layer circle-left-4 position-absolute" />
      <div className="layer rhombus-1 position-absolute" />
      <div className="layer rhombus-2 position-absolute" />
      <div className="layer rectangle position-absolute" />
    </>
  );
};

export default Login;
