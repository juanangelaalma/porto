import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Blogs from "./pages/Blogs";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import CreatePost from "./pages/blog/CreatePost";

import "./index.css";

const Admin = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  const sidebar = { isOpenSidebar, setIsOpenSidebar };

  return (
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
  );
};

export default Admin;
