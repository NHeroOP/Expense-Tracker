import React from 'react'
import ExpenseList from '../../Components/ExpenseList'
import AddExpense from './AddExpense'

export default function Transactions() {
  return (
    <div className="px-6">
      <AddExpense />
      <div>
        <ExpenseList />
      </div>
    </div>
  )
}
