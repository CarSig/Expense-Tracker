import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Balance from "./Balance";
import Filters from "./Filters";
import IncomeExpenses from "./IncomeExpenses";
import Transaction from "./Transaction";

import Pagination from "./Pagination";

const TransactionList = () => {
  const { transactions, filters } = useContext(GlobalContext);

  //sort transactions by date
  const sortByDate = (a, b) => (a.date < b.date ? 1 : -1);
  const sortedTransactions = transactions.sort(sortByDate);

  //Filters
  const [hideFilters, setHideFilters] = useState(true);
  const filteredTransactions = sortedTransactions.filter((transaction) => {
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


  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10);


  // get current transactions
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);



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
