import React, { useEffect } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { setNavState } from '../../redux/features/pagesSlice';


export default function Navbar () {
  const dispatch = useDispatch()
  const {navOpen} = useSelector(state => state.navState)
  const isMd = useMediaQuery({
    query: '(max-width: 768px)'
  })

  useEffect(() => {
    if (isMd) dispatch(setNavState(false))
    else dispatch(setNavState(true))
  }, [isMd])


  return (
    <div className={`bg-[#3c4b64]/90 md:bg-[#3c4b64] ${!navOpen && "hidden"}  ${!navOpen && isMd ? "hidden" : ""} text-white text-xl fixed top-0 left-0 w-[12rem] h-full transition-all ease-in-out delay-100`} >
      <h1 className="bg-[#333f53]/90 md:bg-[#333f53] py-4 w-full pl-8 h-[64px]" >Expense Tracker</h1>
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
  );
}