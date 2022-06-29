import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Balance from "./Balance";
import Filters from "./Filters";
import IncomeExpenses from "./IncomeExpenses";
import Transaction from "./Transaction";
import { useFilters } from "../customHooks/useFilters";
import Pagination from "./Pagination";
import Chart from "./Chart";
import DoughnutChart from "./charts/DoughnutChart";
import { usePaginate } from "../customHooks/usePaginate";

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

  const [transactionsPerPage, totalTransactions, currentPage, paginate, currentTransactions] = usePaginate(filteredTransactions);


  const toggleFiltersWindow = (e) => {
    e.preventDefault();
    setHideFilters(!hideFilters);
  };

  const categories = [...new Set(filteredTransactions.map((transaction) => transaction.category))];
  // function creates an array of objects with the category and the sum of the transactions
  const categoryTotals = categories.map((category) => {
    return {
      category: category,
      total: filteredTransactions.reduce((total, transaction) => {
        return transaction.category === category ? total + transaction.amount : total;
      }, 0),
    };
  }
  );


  // function creates array for each category with sum of amounts

  const amounts = filteredTransactions.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }
    acc[item.category] += item.amount;
    return acc;
  }, {});



  const amountsArray = Object.keys(amounts).map((key) => amounts[key]);
  const categoriesArray = Object.keys(amounts).map((key) => key);



  return (
    <main className="container">

      <h1 className="xl text-primary">Dashboard</h1>
      <Balance />
      <IncomeExpenses />
      <br />
      <button className="btn btn-primary" onClick={toggleFiltersWindow}>
        {hideFilters ? "Show Filters" : "Hide Filters"}
      </button>
      <br />


      <br />
      <Filters hideFilters={hideFilters} setHideFilters={setHideFilters}></Filters>

      <DoughnutChart amountsArray={amountsArray} categoriesArray={categoriesArray} />


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
