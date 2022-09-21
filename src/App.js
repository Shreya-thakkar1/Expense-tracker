import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Desk",
    amount: "200",
    date: new Date(2022, 3, 27),
  },
  {
    id: 2,
    title: "PPF",
    amount: "100",
    date: new Date(2021, 3, 27),
  },
  {
    id: 3,
    title: "Medicine",
    amount: "200",
    date: new Date(2020, 3, 27),
  },
  {
    id: 4,
    title: "Gold",
    amount: "200",
    date: new Date(2022, 3, 27),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
