import React from 'react'
import ExpenseList from '../../Components/ExpenseList'
import AddExpense from './AddExpense'

export default function Transactions() {
  return (
    <div className="px-6 flex flex-col gap-4">
      <AddExpense />
      <div>
        <ExpenseList />
      </div>
    </div>
  )
}
