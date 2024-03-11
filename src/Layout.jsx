import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'
import { useSelector } from 'react-redux'

export default function Layout() {
  const {navOpen} = useSelector(state => state.navState)
 
  return (
    <div className="flex max-w-full" >
      <Navbar />
      <div className={` overflow-hidden flex flex-col flex-1 max-w-full ${navOpen ? "md:ml-[12rem]" : ""} `} >
        <Header />
        <Outlet />
      </div>
   </div>
  )
}
