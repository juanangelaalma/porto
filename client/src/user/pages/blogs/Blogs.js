import React, { useEffect, useState } from "react";
import Category from "../../components/blogs/Category";
import Posts from "../../components/blogs/Posts";
import NavbarBlog from "../../components/blogs/NavbarBlog";
import { fetchAllPosts } from "../../api/posts";
import "./index.css";
import { Route, Switch } from "react-router";
import ReadPost from "./ReadPost";

const Blogs = ({ match }) => {
  const [posts, setPosts] = useState([]);
  const [idCategory, setIdCategory] = useState("");

  useEffect(() => {
    fetchAllPosts()
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <NavbarBlog />
      <Category idCategory={idCategory} setIdCategory={setIdCategory} />
      <Posts posts={posts} />
      <Switch>
        <Route
          path={`${match.path}/blogs/:idPost`}
          component={ReadPost}
        ></Route>
      </Switch>
    </div>
  );
};

export default Blogs;
