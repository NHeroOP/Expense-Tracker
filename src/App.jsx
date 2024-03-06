import { useDispatch } from "react-redux"
import ExpenseList from "./Components/ExpenseList"
import ExpenseStats from "./Components/ExpenseStats"
import Header from "./Components/Header/Header"
import { setExpenseData } from "./redux/features/dataSlice"
import { useEffect } from "react"

export default function App() {
  const dispatch = useDispatch()

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

  return (
    <>
    <Header />
    <div className="flex justify-between">
      <div className="flex flex-col items-left ">
        <h1>EXPENSE TRACKER</h1>
        <ExpenseList />
      </div>
      <div className="w-[720px]">
        <ExpenseStats />
      </div>
    </div>
    </>
  )
}
