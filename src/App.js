import ExpenseItem from "./components/ExpenseItem";

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
      <p>Hello</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
    </div>
  );
}

export default App;
