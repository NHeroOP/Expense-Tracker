import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { nanoid } from 'nanoid';

export default function ExpenseList({data}) {
  const id = nanoid()

  return (
    <ul className='' >
      {data.map(({name, date, profit, price, key}) => {
        return <ExpenseItem key={key} name={name} date={date} profit={profit} price={price} />
      })}
    </ul>
  )
}

export function ExpenseItem({ name, date, profit, price }) {
  return (
    <li className="flex items-center gap-4 max-w-[360px] bg-slate-200 p-4 my-4 rounded-2xl">
      <img src={profit ? "./src/assets/profits.png" : "./src/assets/loss.png" } alt="Img" className="h-16 w-16 rounded-full"/>
  
      <div className="flex flex-col items-left">
        <p>{name}</p>
        <p>{date}</p>
      </div>

      <div className='flex flex-1 justify-end gap-4'>
        <p className="flex" >{profit ? "+" : "-"} ₹{price}</p>
        <p>{profit ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}</p>
      </div>
    </li>
  )
}
