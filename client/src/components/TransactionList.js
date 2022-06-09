import React, { useContext, useState } from "react";

import { GlobalContext } from "../context/GlobalState";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    amountLow: "",
    amountHigh: "",
    category: "",
    comment: "",
  });

  return (
    <main className="container">
      <h2 className="large text-primary">History</h2>
      <Balance />
      <IncomeExpenses />
      <div className="period">
        <div>
          {" "}
          <label htmlFor="repeat">From</label>
          <input type="date" name="date" placeholder="comment" defaultValue={"from"} className="my-1" />
        </div>
        <div>
          {" "}
          <label htmlFor="repeat">To</label>
          <input type="date" name="date" placeholder="comment" defaultValue={"from"} className="my-1" />
        </div>
      </div>
      <div className="transactions">
        <ul>
          {transactions
            .filter((transaction) => {
              // filter by startDate
              if (filters.startDate) {
                return transaction.date >= filters.startDate;
              }
              return transaction;
            })
            .filter((transaction) => {
              // filter by endDate
              if (filters.endDate) {
                return transaction.date <= filters.endDate;
              }
              return transaction;
            })
            .filter((transaction) => {
              // filter by amountLow
              if (filters.amountLow) {
                return transaction.amount >= filters.amountLow;
              }
              return transaction;
            })
            .filter((transaction) => {
              // filter by amountHigh
              if (filters.amountHigh) {
                return transaction.amount <= filters.amountHigh;
              }
              return transaction;
            })
            .filter((transaction) => {
              // filter by category
              if (filters.category) {
                return transaction.category === filters.category;
              }
              return transaction;
            })
            .filter((transaction) => {
              // filter by comment
              if (filters.comment) {
                return transaction.comment.toLowerCase().includes(filters.comment.toLowerCase());
              }
              return transaction;
            })
            .filter((transaction) => {
              // filter by repeat
              if (filters.repeat) {
                return transaction.repeat === filters.repeat;
              }
              return transaction;
            })
            .map((transaction) => {
              return <Transaction key={transaction._id} transaction={transaction} />;
            })}
        </ul>
      </div>

      <a href="/add" className="btn btn-primary">
        Add new transaction
      </a>
    </main>
  );
};

export default TransactionList;
