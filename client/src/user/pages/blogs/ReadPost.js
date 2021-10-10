import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Image, Shimmer } from "react-shimmer";
import { fetchPostById } from "../../api/posts";

import NavbarBlog from "../../components/blogs/NavbarBlog";

const ReadPost = () => {
  const { idPost } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchPostById(idPost)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { title, body } = post;
  return (
    <div className="container read-post">
      <NavbarBlog />
      <div className="row justify-content-center">
        <div className="col-md-8 col-12">
          <h1 className="title">{title}</h1>
          <div className="row">
            <div className="col-12 col-md-6 my-2">
              <div className="row">
                <div className="col-2">
                  <div className="img-pofile">
                    <img
                      src="/assets/images/about.jpeg"
                      alt="Juan Angela Alma"
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12">
                      <h5 className="m-0 author">Juan Angela Alma</h5>
                    </div>
                    <div className="col-12">
                      <p className="m-0 created-at">2 months ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end align-items-center my-2">
              <div className="social-media float-right">
                <a
                  target="__blank"
                  href="https://www.instagram.com/juan.almaa/"
                  className="text-white mr-2"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  target="__blank"
                  href="https://www.facebook.com/juan.alma.395017"
                  className="text-white mr-2"
                >
                  <i className="fab fa-facebook" />
                </a>
                <a
                  target="__blank"
                  href="https://github.com/juanangelaalma"
                  className="text-white mr-2"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  target="__blank"
                  href="https://wa.me/083111064486"
                  className="text-white mr-2"
                >
                  <i className="fab fa-whatsapp" />
                </a>
                <a
                  target="__blank"
                  href="https://www.linkedin.com/in/juan-angela-alma-6857741b6"
                  className="text-white mr-2"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <img className="header" src="https://picsum.photos/300/150" />
          <div className="body">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default ReadPost;
