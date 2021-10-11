import React from "react";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";

const Blogs = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <div className="admin blog container-fluid p-0 d-flex justify-content-end">
      <SideBar isOpenSidebar={isOpenSidebar} />
      <RightBar
        setIsOpenSidebar={setIsOpenSidebar}
        isOpenSidebar={isOpenSidebar}
      >
        <div className="row">
          <h1>Blog</h1>
        </div>
      </RightBar>
    </div>
  );
};

export default Blogs;
