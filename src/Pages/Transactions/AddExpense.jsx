import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addExpenseData } from '../../redux/features/dataSlice';
import "./Expense.css"

export default function AddExpense() {
  const dateObj = new Date()

  const [type, setType] = useState("")
  const [date, setDate] = useState(dateObj.toISOString().substring(0, 10));
  const [price, setPrice] = useState()
  const [name, setName] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (type !== "" && name.trim() !== '' && price > 0) {
      const isIncome = type === "income" ? true : false
      dispatch(addExpenseData({ name, date, isIncome, price }));
      setName('');
      setPrice();
      setType("");
      setDate(dateObj.toISOString().substring(0, 10));
    } else {
      alert('Please fill in all fields and select a category.');
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row rounded-md border border-black/30'>
      <input
        className="exp-input"
        type="text"
        placeholder="Description"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />
      <input
        className="exp-input"
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        className="exp-input"
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select value={type} className="exp-input"onChange={(e) => setType(e.target.value)}>
        <option value="" defaultValue>--Select--</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit" className="h-10 px-3 py-2 bg-slate-800 text-neutral-300 hover:bg-slate-700 active:bg-slate-90 w-full">
        ADD EXPENSE
      </button>
    </form>
  )
}


