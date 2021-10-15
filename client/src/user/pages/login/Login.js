import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router";

import { login } from '../../../actions/auth'
import "./styles.css";

const Login = () => {
  const [email, setEmail] =  useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const user = useSelector(state => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    dispatch(login({ email, password })).then(() => setLoading(false)).catch(() => setLoading(false))
  }

  if(user.isLoggedIn) {
    return <Redirect to="/admin/dashboard" />
  }

  return (
    <div className="container login-page">
      <div className="row justify-content-center align-items-center">
        <div className="card">
          <p className="brand text-center" href="#">
            ALMA<span>.</span>
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="text" className="form-control" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" type="password" className="form-control" />
            <button type="submit" className="btn px-4 text-white">
              { loading ? 'loading...' : 'Login' }
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
