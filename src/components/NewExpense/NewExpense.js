import { useState } from "react";
import ExpeseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsFormDisplayed(false);
  };

  const formEditHandler = () => {
    setIsFormDisplayed(true);
  };

  const stopEditingForm = () => {
    setIsFormDisplayed(false);
  };
  return (
    <div className="new-expense">
      {!isFormDisplayed && (
        <button onClick={formEditHandler}>Add New Expense</button>
      )}
      {isFormDisplayed && (
        <ExpeseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
