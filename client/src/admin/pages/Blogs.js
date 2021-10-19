import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from "react-toastify";

import { getAllPosts, deletePostBySlug } from "../../services/post.service";
import BlogList from "../components/BlogList";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";
import { notifySuccess } from "../../common/toast";
import Title from "../components/Title";
import "../styles/blog.css";
import "../styles/option.css"
import { setMessage } from "../../actions/message";

const Blogs = ({ isOpenSidebar, setIsOpenSidebar }) => {
  const [status, setStatus] = useState("drafted");
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch()

  const message = useSelector(state => state.message)

  const getPosts = async () => {
    const response = await getAllPosts();
    const { data } = response;
    console.log('render')
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
    console.log(posts)
  }, []);

  const handleDeletePost = async (slug) => {
    try {
      await deletePostBySlug(slug)
      dispatch(setMessage("succesfull deleted"))
      getPosts()
    }catch(err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    if (message) {
      notifySuccess(message.message);
    }
  }, [message])

  return (
    <div className="admin blog container-fluid p-0 d-flex justify-content-end">
      <SideBar isOpenSidebar={isOpenSidebar} />
      <RightBar
        setIsOpenSidebar={setIsOpenSidebar}
        isOpenSidebar={isOpenSidebar}
      >
        <div className="row">
          <div className="col-md-12 p-0 d-flex justify-content-between mb-4">
            <Title>Your Blog</Title>
            <Link
              to="/admin/blog/create"
              className="btn h-75 p-2 btn-create-post"
            >
              Create a Post
            </Link>
          </div>
          <div className="status col-md-12 p-0">
            <ul className="d-flex p-0 justify-content-start">
              <li
                className={status == "draft" ? "active" : ""}
                onClick={() => setStatus("drafted")}
              >
                Draft
              </li>
              <li
                className={status == "publish" ? "active" : ""}
                onClick={() => setStatus("published")}
              >
                Publish
              </li>
            </ul>
          </div>
          {posts.map((post) => {
            if(post.status == status) {
              return <BlogList post={post} option={{ component: status == "published" ? PublishOption : DraftOption }} handleDeletePost={handleDeletePost} />
            }
          })}
        </div>
      </RightBar>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

const DraftOption = ({ post, handleDeletePost }) => {
  const [isOpenDropdown, setIsOpenDropDown] = useState(false);

  const { slug } = post
  return (
    <div className="option d-flex align-item-center position-relative">
      <p className="p-0 m-0 mr-2">Last update { moment(post.updated_at, "YYYYMMDD").fromNow() }</p>
      <div className="icon m-0 p-0 position-relative">
        <i
          onClick={() => setIsOpenDropDown(!isOpenDropdown)}
          className="fas fa-caret-down"
        ></i>
        <div
          style={{ display: isOpenDropdown ? "flex" : "none" }}
          className="menu position-absolute"
        >
          <ul>
            <Link to={'/admin/blog/drafted/edit/' + slug}>Edit draft</Link>
            <li onClick={() => handleDeletePost(slug)}>Delete draft</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const PublishOption = ({ post, handleDeletePost }) => {
  const [isOpenDropdown, setIsOpenDropDown] = useState(false);

  const { slug } = post
  return (
    <div className="option d-flex align-item-center position-relative">
      <p className="p-0 m-0 mr-2">Created on { moment(post.created_at).format('LL') }</p>
      <div className="icon m-0 p-0 position-relative d-flex align-items-center">
        <i
          style={{ fontSize: "1.1em" }}
          onClick={() => setIsOpenDropDown(!isOpenDropdown)}
          className="fas fa-ellipsis-h"
        ></i>
        <div
          style={{ display: isOpenDropdown ? "flex" : "none" }}
          className="menu position-absolute"
        >
          <ul>
            <Link to={'/admin/blog/published/edit/' + slug}>Edit post</Link>
            <li onClick={() => handleDeletePost(slug)}>Delete draft</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
