import React, { useContext, useState } from "react";

import { GlobalContext } from "../context/GlobalState";
import Balance from "./Balance";
import Filters from "./Filters";
import IncomeExpenses from "./IncomeExpenses";
import Transaction from "./Transaction";

import Pagination from "./Pagination";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10);

  // get current transactions
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    minAmount: "",
    maxAmount: "",
    category: "",
    comment: "",
  });

  return (
    <main className="container">
      <h2 className="large text-primary">History</h2>
      <Balance />
      <IncomeExpenses />

      <Filters></Filters>
      <div className="transactions">
        <ul>
          {currentTransactions
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
              // filter by minAmount
              if (filters.minAmount) {
                return transaction.amount >= filters.minAmount;
              }
              return transaction;
            })
            .filter((transaction) => {
              // filter by maxAmount
              if (filters.maxAmount) {
                return transaction.amount <= filters.maxAmount;
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
        <Pagination transactionsPerPage={transactionsPerPage} totalTransactions={transactions.length} paginate={paginate} />
      </div>

      <a href="/add" className="btn btn-primary">
        Add new transaction
      </a>
    </main>
  );
};

export default TransactionList;
