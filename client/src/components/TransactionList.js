import React, { useContext, useState } from "react";

import { GlobalContext } from "../context/GlobalState";
import Balance from "./Balance";
import Filters from "./Filters";
import IncomeExpenses from "./IncomeExpenses";
import Transaction from "./Transaction";

import Pagination from "./Pagination";

const TransactionList = () => {
  const { transactions, filters } = useContext(GlobalContext);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10);

  //sort transactions by date
  const sortByDate = (a, b) => (a.date < b.date ? 1 : -1);
  const sortedTransactions = transactions.sort(sortByDate);


  const filteredTransactions1 = sortedTransactions.filter((transaction) => {
    //  
    //   const startDate = filters.startDate;
    //   const endDate = filters.endDate;
    const minAmount = filters.minAmount;
    const maxAmount = filters.maxAmount;
    const isAmount = (!minAmount || minAmount < transaction.amount) && (!maxAmount || maxAmount > transaction.amount);
    const comment = transaction.comment.toLowerCase().includes(filters.comment.toLowerCase()) || filters.comment === ""
    const category = transaction.category === filters.category || filters.category === ""
    const repeat = transaction.repeat === filters.repeat






    //   const isDate = startDate.length === 0 || endDate.length === 0 ? true : date >= startDate && date <= endDate;
    return isAmount && comment && category
    //  && isDate;
  });


  const filteredTransactions = sortedTransactions.filter((transaction) => {
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


  // get current transactions
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;



  const currentTransactions = filteredTransactions1.slice(indexOfFirstTransaction, indexOfLastTransaction);
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Filters
  const [hideFilters, setHideFilters] = useState(true);

  const openFiltersWindow = (e) => {
    e.preventDefault();
    setHideFilters(false);
  };
  return (
    <main className="container">
      <h2 className="large text-primary">History</h2>
      <Balance />
      <IncomeExpenses />
      <br />
      <button className="btn btn-primary" onClick={openFiltersWindow}>
        Show Filters
      </button>
      <br />
      <br />
      <Filters hideFilters={hideFilters} setHideFilters={setHideFilters}></Filters>
      <div className="transactions">
        <ul>
          {currentTransactions.map((transaction) => {
            return <Transaction key={transaction._id} transaction={transaction} />;
          })}
        </ul>
        <Pagination transactionsPerPage={transactionsPerPage} totalTransactions={filteredTransactions.length} paginate={paginate} currentPage={currentPage} />
      </div>
    </main>
  );
};

export default TransactionList;
