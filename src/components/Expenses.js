import { useState } from "react";
import Card from "./Card";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const expenseYearHandler = (getYear) => {
    setFilteredYear(getYear);
    console.log(getYear);
  };
  return (
    <div>
      {/* composition - combining componets and children prop */}
      <Card className="expenses">
        <ExpensesFilter
          getExpenseYear={expenseYearHandler}
          selected={filteredYear}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
