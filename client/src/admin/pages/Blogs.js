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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quod fuga non dignissimos ab provident, ut temporibus voluptatem modi sunt, vero quis, repellat voluptas. Quibusdam quod cupiditate modi architecto harum.
        </div>
      </RightBar>
    </div>
  );
};

export default Blogs;
