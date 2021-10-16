import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Blogs from "./pages/Blogs";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import CreatePost from "./pages/blog/CreatePost";

import AuthVerify from "../common/AuthVerify";
import "./index.css";
import { logout } from "../actions/auth";

const Admin = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const sidebar = { isOpenSidebar, setIsOpenSidebar };
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  if (!user.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Switch>
        <Route path="/admin/dashboard">
          <Dashboard {...sidebar} />
        </Route>

        <Route path="/admin/blog" exact>
          <Blogs {...sidebar} />
        </Route>

        <Route path="/admin/category">
          <Category {...sidebar} />
        </Route>

        <Route path="/admin/profile">
          <Profile {...sidebar} />
        </Route>

        <Route path="/admin/blog/create">
          <CreatePost {...sidebar} />
        </Route>
      </Switch>
      <AuthVerify logOut={logOut} />
    </div>
  );
};

export default Admin;
