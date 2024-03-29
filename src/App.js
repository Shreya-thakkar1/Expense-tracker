import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Desk",
    amount: "200",
    date: new Date(2022, 5, 27),
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
    date: new Date(2020, 8, 27),
  },
  {
    id: 4,
    title: "Gold",
    amount: "200",
    date: new Date(2022, 9, 27),
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
