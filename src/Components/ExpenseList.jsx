import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { removeExpenseData } from '../redux/features/dataSlice';

export default function ExpenseList() {
  const expenseData = useSelector((state) => state.expenseData.expData)
  
  return (
    <table className="w-full bg-white shadow-2xl mb-4">
      <thead>
        <tr className="grid grid-cols-12 w-full py-2 font-[600] text-xl bg-gray-300">
          <th className='col-span-1'></th>
          <th className="col-span-5 text-left" >Name</th>
          <th className="col-span-3 text-left" >Type</th>
          <th className="col-span-2 text-right" >Price</th>
          <th className="col-span-1 "></th>
        </tr>
      </thead>
      <tbody >
      {expenseData.map(({name, date, isIncome, price, id}) => {
        return <ExpenseItem key={id} name={name} date={date} isIncome={isIncome} price={price} id={id} />
      })}
      </tbody>
    </table>
  )
}

function ExpenseItem({ name, date, isIncome, price, id }) {
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
    <tr className="grid grid-cols-12 items-center w-full px-2 py-1 transition ease-in-out hover:bg-gray-300 border-t-[2px] border-gray-300 text-[#050315] text-sm">
      <td className="col-span-1  ">
        {isIncome ? <ArrowUpwardIcon className="text-green-500" /> : <ArrowDownwardIcon className="text-red-600" />}
      </td>
  
      <td className="col-span-5 text-left">
        <div>
          <p className="text-lg font-[500]" >{name[0].toUpperCase()}{name.slice(1)}</p>
          <p className=" text-md" >{d}</p>
        </div>
      </td>
      <td className="col-span-3 text-left">
        <p className={`font-bold ${isIncome ? "text-green-500" : "text-red-600"}`} >{isIncome ? "Income" : "Expense"} </p>
      </td>

      <td className="col-span-2 flex">
        <div className='flex flex-1 justify-end gap-4'>
          <p className="flex" >{isIncome ? "+" : "-"} ₹{Number(price).toLocaleString("en-IN")}</p>
        </div>

      </td>
      <td className="col-span-1 text-right" >
        <div>
          <button onClick={() => setShowDelModal(true)} >
            <DeleteForeverIcon/>
          </button>          
        </div>
      {showDelModal && <DelModal onClose={onClose} onDel={onDel} />}
      </td>
    </tr>
  )
}

function DelModal({onClose, onDel}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center">
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
