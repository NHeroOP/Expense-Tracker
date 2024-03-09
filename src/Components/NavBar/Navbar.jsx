import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Navbar () {
  const {navOpen} = useSelector(state => state.navState)

  return (
    <>
      {navOpen ? <NavbarOpen /> : <NavbarClose />}
    </>
  );
}

export function NavbarOpen() {
  
  return (
    <>
    <div className="bg-[#3c4b64] w-[30vh] hidden md:block text-white text-xl h-[100vh] sticky self-start top-0" >
      <h1 className="bg-[#333f53] py-4 w-full pl-8 h-[64px]" >Expense Tracker</h1>
      <ul className="flex flex-col gap-4 py-6" >
        <li>
          <NavLink to={""} className="flex gap-4 ml-6 hover:text-white/80 items-center" >
            <DashboardIcon />
            <h2>Dashboard</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/transactions"} className="flex gap-4 ml-6 hover:text-white/80 items-center" >
            <ReceiptIcon /> 
            <h2>Transactions</h2>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/stats"} className="flex gap-4 ml-6 hover:text-white/80 items-center" >
            <InsertChartIcon />
            <h2>Statstics</h2>
          </NavLink>
        </li>
      </ul>
    </div>

    <NavbarClose className="md:hidden" />
    </>
  )
}

export function NavbarClose({className = ""}) {
  return (
    <div className={`${className} bg-[#3c4b64] text-white text-xl w-[10%] h-[100vh] sticky self-start top-0`} >
      <h1 className="bg-[#333f53] py-4 w-full pl-8 h-[64px]" ></h1>
      <ul className="flex flex-col gap-4 py-6 justify-center items-center" >
        <li>
          <NavLink to={""} className="hover:text-white/80" >
            <DashboardIcon />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/transactions"} className="hover:text-white/80" >
            <ReceiptIcon /> 
          </NavLink>
        </li>
        <li>
          <NavLink to={"/stats"} className="hover:text-white/80" >
            <InsertChartIcon />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
