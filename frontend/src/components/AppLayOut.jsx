import React from 'react'
import NavBar from './navBar/NavBar'
import { Outlet } from "react-router-dom";

const AppLayOut = () => {
  return (
    <div>
       <NavBar/>
       <Outlet/>
    </div>
  )
}

export default AppLayOut
