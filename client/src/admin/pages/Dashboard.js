import React from "react";
import SideBar from "../components/SideBar";
import RightBar from "../components/RightBar";
import Title from "../components/Title";

const Dashboard = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <div className="admin dashboard container-fluid p-0 d-flex justify-content-end">
      <SideBar isOpenSidebar={isOpenSidebar} />
      <RightBar
        setIsOpenSidebar={setIsOpenSidebar}
        isOpenSidebar={isOpenSidebar}
      >
        <div className="row">
          <div className="w-100 mb-4">
            <Title>Dashbooard</Title>
          </div>
        </div>
      </RightBar>
    </div>
  );
};

export default Dashboard;
