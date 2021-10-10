import React from "react";
import SideBar from "../components/SideBar";
import RightBar from "../components/RightBar";

const Dashboard = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <div className="admin dashboard container-fluid p-0 d-flex justify-content-end">
      <SideBar isOpenSidebar={isOpenSidebar} />
      <RightBar
        setIsOpenSidebar={setIsOpenSidebar}
        isOpenSidebar={isOpenSidebar}
      >
        <div className="row">
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">3</div>
        </div>
      </RightBar>
    </div>
  );
};

export default Dashboard;
