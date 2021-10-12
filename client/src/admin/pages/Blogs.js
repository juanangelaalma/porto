import React, { useState } from "react";
import BlogList from "../components/BlogList";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";
import TextEditor from "../components/TextEditor";

import Title from "../components/Title";
import "../styles/blog.css";

const Blogs = ({ isOpenSidebar, setIsOpenSidebar }) => {
  const [status, setStatus] = useState("draft");
  return (
    <div className="admin blog container-fluid p-0 d-flex justify-content-end">
      <SideBar isOpenSidebar={isOpenSidebar} />
      <RightBar
        setIsOpenSidebar={setIsOpenSidebar}
        isOpenSidebar={isOpenSidebar}
      >
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between mb-4">
            <Title>Your Blog</Title>
            <button className="btn btn-create-post">
              Create a Post
            </button>
          </div>
          <div className="status col-md-12 p-0">
            <ul className="d-flex p-0 justify-content-start">
              <li
                className={status == "draft" ? "active" : ""}
                onClick={() => setStatus("draft")}
              >
                Draft
              </li>
              <li
                className={status == "publish" ? "active" : ""}
                onClick={() => setStatus("publish")}
              >
                Publish
              </li>
            </ul>
          </div>
          <BlogList
            option={status == "publish" ? <PublishOption /> : <DraftOption />}
          />
          <BlogList
            option={status == "publish" ? <PublishOption /> : <DraftOption />}
          />
          <BlogList
            option={status == "publish" ? <PublishOption /> : <DraftOption />}
          />
          <BlogList
            option={status == "publish" ? <PublishOption /> : <DraftOption />}
          />
        </div>
      </RightBar>
    </div>
  );
};

const DraftOption = () => {
  const [isOpenDropdown, setIsOpenDropDown] = useState(false);
  return (
    <div className="d-flex align-item-center position-relative">
      <p className="p-0 m-0 mr-2">Last edited 13 days ago</p>
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
            <li>Edit draft</li>
            <li>Delete draft</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const PublishOption = () => {
  const [isOpenDropdown, setIsOpenDropDown] = useState(false);
  return (
    <div className="d-flex align-item-center position-relative">
      <p className="p-0 m-0 mr-2">Published on Aug 18</p>
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
            <li>Edit post</li>
            <li>Delete post</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
