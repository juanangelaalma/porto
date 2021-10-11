import React from "react";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";

const Profile = ({ isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <div className="admin profile container-fluid p-0 d-flex justify-content-end">
      <SideBar isOpenSidebar={isOpenSidebar} />
      <RightBar
        setIsOpenSidebar={setIsOpenSidebar}
        isOpenSidebar={isOpenSidebar}
      >
        <div className="row">
          <h1>Profile</h1>
        </div>
      </RightBar>
    </div>
  );
};

export default Profile;
