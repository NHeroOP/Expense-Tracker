import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar'

export default function Layout() {
  return (
    <div className="flex max-w-full" >
      <Navbar />
      <div className="flex flex-col w-full" >
        <Header />
        <Outlet />
      </div>
   </div>
  )
}
