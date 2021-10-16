import React from 'react'
import '../styles/rightbar.css'
import Navbar from './Navbar'

const RightBar = ({ children, isOpenSidebar, setIsOpenSidebar }) => {
  return (
    <div className={ isOpenSidebar ? 'rightbar w-80' : 'rightbar w-100' }>
      <Navbar menu={true} isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      <div className="container-fluid px-5 py-2">
        { children }
      </div>
    </div>
  )
}

export default RightBar
