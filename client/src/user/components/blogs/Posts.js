import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import CardPost from "./CardPost";

const Posts = ({ idCategory, posts }) => {
  const currentPost = idCategory ? posts.filter(post => post.category._id == idCategory) : posts
  return (
    <div className="row">
      { currentPost.map(post => {
        return <CardPost post={post} />
      }) }
    </div>
  );
};

export default Posts;
