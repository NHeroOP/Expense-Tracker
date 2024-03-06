import React from 'react'
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
  
  return (
    <li className="flex items-center gap-4 max-w-[480px] bg-slate-200 p-4 my-4 rounded-2xl">
      <img src={isIncome ? "./src/assets/profits.png" : "./src/assets/loss.png" } alt="Img" className="h-16 w-16 rounded-full"/>
  
      <div className="flex flex-col items-left">
        <p>{name}</p>
        <p>{date}</p>
      </div>

      <div className='flex flex-1 justify-end gap-4'>
        <p className="flex" >{isIncome ? "+" : "-"} ₹{price}</p>
        <p>{isIncome ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}</p>
      </div>

      <div>
        <button onClick={() => dispatch(removeExpenseData(id))} >
          <DeleteForeverIcon/>
        </button>
      </div>
    </li>
  )
}
