import { useState } from "react";
import "./ExpenseForm.css";

const ExpeseForm = () => {
  //using one state approach
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // React scedule states, it doesn't update instantly.
    // If you scedule a lot of state updates, you could be depended on outdated/Incorrect state snapshot if you use this approach
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //instaed use, it wil guaranteed, that the state snapshot will gives you, always latest snapshot of state
    //keeping all states updates in mind
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

//Handle multiple state

// const [enteredTitle, setEnteredTitle] = useState("");
// const [enteredAmount, setEnteredAmount] = useState("");
// const [enteredDate, setEnteredDate] = useState("");

// const titleChangeHandler = (event) => {
//   setEnteredTitle(event.target.value);
// };

// const amountChangeHandler = (event) => {
//   setEnteredAmount(event.target.value);
// };

// const dateChangeHandler = (event) => {
//   setEnteredDate(event.target.value);
// };
export default ExpeseForm;
