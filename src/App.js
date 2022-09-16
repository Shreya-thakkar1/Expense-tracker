import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

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
      date: new Date(2022, 3, 27),
    },
    {
      id: 3,
      title: "Mediclaim",
      amount: "200",
      date: new Date(2022, 3, 27),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
