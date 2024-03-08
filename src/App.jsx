import { useDispatch, useSelector } from "react-redux"
import ExpenseList from "./Components/ExpenseList"
import ExpenseStats from "./Components/ExpenseStats"
import { setExpenseData } from "./redux/features/dataSlice"
import { useEffect } from "react"
import Card from "./Components/Card"
import AddExpense from "./Pages/Transactions/AddExpense"

export default function App() {
  const dispatch = useDispatch()
  const expenseData = useSelector(state => state.expenseData.expData)

  if (expenseData.length > 0) {
    const incomeData = expenseData.filter((data) => data?.isIncome && data?.price)
    const income = incomeData.map((data) => Number(data?.price)).reduce((acc, curVal) => acc + curVal)
  
    const expData = expenseData.filter((data) => !data?.isIncome && data?.price)
    const expense = expData.map((data) => Number(data?.price)).reduce((acc, curVal) => acc + curVal)
  
    const final = income - expense
  }



  useEffect(() => {
    const storedData = localStorage.getItem("expData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        dispatch(setExpenseData(parsedData));
      } catch (error) {
        console.error("Error parsing stored data:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (expenseData.length > 0) {
      localStorage.setItem("expData", JSON.stringify(expenseData));
    }
  }, [expenseData]);

  return (
    <div className=" max-w-full  flex flex-col justify-between px-4">
      <div className="flex gap-4  my-4 " >
        <Card type="profit" value={final > 0 ? final : "N/A"} title="Profit" />
        <Card type="expense" value={expense} title="Expense" />
        <Card type="income" value={income} title="Income" />
        <Card type="loss" value={final < 0 ? final : "N/A"} title="Loss" />
      </div>
      <div className="bg-white mb-4 mx-8 p-4 rounded-3xl">
        <ExpenseStats />
      </div>
      <div className="px-4 flex flex-col gap-4">
        <AddExpense />
        <ExpenseList />
      </div>
    </div>
  )
}
