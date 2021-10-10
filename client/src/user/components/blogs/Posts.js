import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";
import CardPost from "./CardPost";

const Posts = ({ posts }) => {
  return (
    <div className="row">
      { posts.map(post => {
        return <CardPost post={post} />
      }) }
    </div>
  );
};

export default Posts;
