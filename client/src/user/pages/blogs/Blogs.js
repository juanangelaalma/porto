import React, { useEffect, useState } from "react";
import Category from "../../components/blogs/Category";
import Posts from "../../components/blogs/Posts";
import NavbarBlog from "../../components/blogs/NavbarBlog";
import { fetchAllPosts } from "../../services/posts.service";
import "./index.css";
import { Route, Switch } from "react-router";
import ReadPost from "./ReadPost";
import { getCategories } from "../../services/categories.service";

const Blogs = ({ match }) => {
  const [posts, setPosts] = useState([]);
  const [idCategory, setIdCategory] = useState("");
  const [categories, setCategories] = useState([])

  const getAllPosts = async () => {
    try {
      const response = await fetchAllPosts()
      setPosts(response.data)
    }catch(err) {
      console.log(err)
    }
  }

  const getAllCategories = async () => {
    try {
      const response = await getCategories()
      setCategories(response.data.categories)      
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllPosts()
    getAllCategories()
  }, []);

  return (
    <div className="container">
      <NavbarBlog />
      <Category categories={categories} idCategory={idCategory} setIdCategory={setIdCategory} />
      <Posts posts={posts} idCategory={idCategory} />
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
