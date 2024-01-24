import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from "./SideNavbar";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div>
      
        <SideNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
