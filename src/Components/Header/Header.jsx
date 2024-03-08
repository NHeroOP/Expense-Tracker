import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNav } from '../../redux/features/pagesSlice';

export default function Header() {
  const dispatch = useDispatch()
  const {navOpen} = useSelector(state => state.navState)

  const handleClick = () => {
    dispatch(toggleNav())
  }

  return (
    <div className="flex justify-start pl-4 mb-4 py-4 sticky top-0 z-[200] bg-white/50">
      <div className="flex gap-4">
        <button onClick={handleClick} >
          {navOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <h1>Dashboard</h1>
      </div>
    </div>
  )
}
