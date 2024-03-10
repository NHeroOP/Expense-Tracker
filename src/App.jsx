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
  let income;
  let expense;

  try {
    const incomeData = expenseData.filter((data) => data?.isIncome && data?.price)
    income = incomeData.map((data) => Number(data?.price)).reduce((acc, curVal) => acc + curVal)
    
    const expData = expenseData.filter((data) => !data?.isIncome && data?.price)
    expense = expData.map((data) => Number(data?.price))?.reduce((acc, curVal) => acc + curVal)
  } catch (error) {
    
  }

  const final = income - expense



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
    localStorage.setItem("expData", JSON.stringify(expenseData));
  }, [expenseData]);

  return (
    <div className=" max-w-full flex flex-col justify-between px-8">
      <div className=" grid lg:grid-cols-4 lg:grid-rows-none sm:grid-cols-2 sm:grid-rows-2 grid-rows-4 gap-4  my-4 " >
        <Card type="profit" value={final > 0 ? final : "N/A"} title="Profit" className=" col-span-1"/>
        <Card type="expense" value={expense ? expense : "N/A"} title="Expense" />
        <Card type="income" value={income ? income : "N/A"} title="Income" />
        <Card type="loss" value={final < 0 ? final : "N/A"} title="Loss" />
      </div>
      <div className="bg-white mb-4 p-4 rounded-3xl">
        <ExpenseStats />
      </div>
      <div className="px-4 flex flex-col gap-4 bg-white w-full shadow-2xl py-4 rounded-3xl mb-4">
        <AddExpense />
        <ExpenseList />
      </div>
    </div>
  )
}
