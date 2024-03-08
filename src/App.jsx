import { useDispatch, useSelector } from "react-redux"
import ExpenseList from "./Components/ExpenseList"
import ExpenseStats from "./Components/ExpenseStats"
import { setExpenseData } from "./redux/features/dataSlice"
import { useEffect } from "react"
import Card from "./Components/Card"

export default function App() {
  const dispatch = useDispatch()
  const expenseData = useSelector(state => state.expenseData.expData)


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
        <Card type="profit" value={1000} title="Profit" />
        <Card type="expense" value={500} title="Expense" />
        <Card type="income" value={2000} title="Income" />
        <Card type="loss" value={300} title="Loss" />
      </div>
      <div className="bg-white mb-4 mx-8 p-4 rounded-3xl">
        <ExpenseStats />
      </div>
      <div className="px-4">
        <ExpenseList />
      </div>
    </div>
  )
}
