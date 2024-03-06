import ExpenseList from "./Components/ExpenseList"

export default function App() {
  const data = [
    {name: "Amazon Prime Video", date: "10 April 2024", profit: true, price: 30, key:1},
    {name: "Netflix", date: "13 May 2024", profit: false, price: 45, key:2},
    {name: "Grocceries", date: "1 Jan 2024", profit: false, price: 310, key:3},
    {name: "Snacks", date: "11 Feb 2024", profit: true, price: 3000, key:4},
  ]


  return (
    <div className="flex flex-col items-center ">
      <h1>EXPENSE TRACKER</h1>
      <ExpenseList data={data} />
    </div>
  )
}
