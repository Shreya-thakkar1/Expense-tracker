import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: 1,
      title: "Medicine",
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
      title: "Mediclaim",
      amount: "200",
      date: new Date(2020, 3, 27),
    },
    {
      id: 3,
      title: "Mediclaim",
      amount: "200",
      date: new Date(2022, 3, 27),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
