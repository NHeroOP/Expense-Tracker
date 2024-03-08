import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <div className="flex justify-start pl-4 mb-4 py-6 sticky top-0 bg-white">
      <div className="flex gap-4">
        <button>
          <MenuIcon />
        </button>
        <h1>Dashboard</h1>
      </div>
    </div>
  )
}
