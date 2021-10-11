import React from 'react'
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";

const Category = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <div className="admin category container-fluid p-0 d-flex justify-content-end">
      <SideBar isOpenSidebar={isOpenSidebar} />
      <RightBar
        setIsOpenSidebar={setIsOpenSidebar}
        isOpenSidebar={isOpenSidebar}
      >
        <div className="row">
          <h1>Category</h1>
        </div>
      </RightBar>
    </div>
  )
}

export default Category
