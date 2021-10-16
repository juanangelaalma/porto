import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from "./admin/Admin";
import RouterAdmin from "./admin/Admin";
import Blogs from "./user/pages/blogs/Blogs";
import ReadPost from "./user/pages/blogs/ReadPost";

import { history } from './helpers/history'

import Home from './user/pages/Home'
import Login from './user/pages/login/Login'

const App = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/admin" component={RouterAdmin} exact />

        <Route path="/blogs" component={Blogs} exact />
        <Route path="/blogs/:idPost" component={ReadPost} exact />
        <Route path="/login" component={Login} exact />

        { isLogin ? <Route path="/admin" component={Admin} /> : '' }
      </Switch>
    </Router>
  );
};


export default App;
