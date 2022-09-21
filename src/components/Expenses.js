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
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
