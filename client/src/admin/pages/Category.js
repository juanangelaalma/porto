import React from "react";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";
import Title from "../components/Title";

const Category = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <div className="admin category container-fluid p-0 d-flex justify-content-end">
      <SideBar isOpenSidebar={isOpenSidebar} />
      <RightBar
        setIsOpenSidebar={setIsOpenSidebar}
        isOpenSidebar={isOpenSidebar}
      >
        <div className="row">
          <div className="w-100 mb-4">
            <Title>Category</Title>
          </div>
        </div>
      </RightBar>
    </div>
  );
};

export default Category;
