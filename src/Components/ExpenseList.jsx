import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { removeExpenseData } from '../redux/features/dataSlice';

export default function ExpenseList() {
  const expenseData = useSelector((state) => state.expData)
  
  return (
    <ul className='' >
      {expenseData.map(({name, date, isIncome, price, id}) => {
        return <ExpenseItem key={id} name={name} date={date} isIncome={isIncome} price={price} id={id} />
      })}
    </ul>
  )
}

export function ExpenseItem({ name, date, isIncome, price, id }) {
  const dispatch = useDispatch()
  const [showDelModal, setShowDelModal] = useState(false)
  const d = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const onClose = () => {
    setShowDelModal(false)
  }

  const onDel = () => {
    dispatch(removeExpenseData(id))
    setShowDelModal(false)
  }
   
  return (
    <li className="flex items-center gap-4 max-w-[480px] bg-slate-200 p-4 my-4 rounded-2xl">
      <img src={isIncome ? "./src/assets/profits.png" : "./src/assets/loss.png" } alt="Img" className="h-16 w-16 rounded-full"/>
  
      <div className="flex flex-col items-left">
        <p>{name}</p>
        <p>{d}</p>
      </div>

      <div className='flex flex-1 justify-end gap-4'>
        <p className="flex" >{isIncome ? "+" : "-"} ₹{price}</p>
        <p>{isIncome ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}</p>
      </div>

      <div>
        <button onClick={() => setShowDelModal(true)} >
          <DeleteForeverIcon/>
        </button>
      </div>

      {showDelModal && <DelModal onClose={onClose} onDel={onDel} />}
    </li>
  )
}

export function DelModal({onClose, onDel}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center">  {/* Combined styles */}
      <div className="bg-white p-8 rounded-md text-center">
        <p>Are you sure you want to delete?</p>
        <div className="flex justify-center gap-2">
          <button onClick={onClose} className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md">Cancel</button>
          <button onClick={onDel} className="px-3 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">Delete</button>
        </div>
      </div>
    </div>
  )
}
