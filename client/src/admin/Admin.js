import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Dashboard from "./pages/Dashboard";

const Admin = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  const sidebar = { isOpenSidebar, setIsOpenSidebar }

  return (
    <Switch>
      <Route path="/admin/dashboard">
        <Dashboard {...sidebar} />
      </Route>
      <Route path="/admin/blog">
        <Blogs {...sidebar}  />
      </Route>
    </Switch>
  );
};

export default Admin;
