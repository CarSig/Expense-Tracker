import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { user } = useContext(GlobalContext);
  const amounts = user.transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className="incExp">
      {" "}
      <div className="income">
        <h3>Income</h3>
        <h4>${income}</h4>
      </div>
      <div className="expense">
        <h3>Expense</h3>
        <h4>${expense}</h4>
      </div>
    </div>
  );
};

export default IncomeExpenses;
