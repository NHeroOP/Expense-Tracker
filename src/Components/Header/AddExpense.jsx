import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addExpenseData, setExpenseData } from '../../redux/features/dataSlice';

export default function AddExpense() {
  const [type, setType] = useState("")
  // const [date, setDate] = useState()
  const [price, setPrice] = useState(0)
  const [name, setName] = useState("")
  const dispatch = useDispatch()
  const expenseData = useSelector((state) => state.expData)

  const defData = [
    {name: "Amazon Prime Video", date: "10 April 2024", isIncome: true, price: 30, id:1},
    {name: "Netflix", date: "13 May 2024", isIncome: false, price: 45, id:2},
    {name: "Grocceries", date: "1 Jan 2024", isIncome: false, price: 310, id:3},
    {name: "Snacks", date: "11 Feb 2024", isIncome: true, price: 3000, id:4},
  ]
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (type !== "" && name.trim() !== '' && price > 0) {
      const isIncome = type === "income" ? true : false
      dispatch(addExpenseData({ name, isIncome, price }));
      setName('');
      setPrice(0);
      setType("");
    } else {
      alert('Please fill in all fields and select a category.');
    }
  }


  
  useEffect(() => {
    if (expenseData.length > 0) {
      localStorage.setItem("expData", JSON.stringify(expenseData));
    }
    else {
      localStorage.setItem("expData", JSON.stringify(defData))
    }
  }, [expenseData]);
  
  return (
    <form onSubmit={handleSubmit} className='flex rounded-md border border-black/30'>
      <input
        className="w-full border-r border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />
      <input
        className="w-full border-r border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <select value={type} className='w-full border-r border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50' onChange={(e) => setType(e.target.value)}>
        <option value="" defaultValue>--Select--</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit" className="h-10 px-3 py-2 bg-slate-800 text-neutral-300 hover:bg-slate-700 active:bg-slate-900">
        ADD
      </button>
    </form>
  )
}


