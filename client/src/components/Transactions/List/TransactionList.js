import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import Balance from "./Balance";
import Filters from "./Filters";
import IncomeExpenses from "./IncomeExpenses";
import Transaction from "./Transaction";
import { applyFilters } from "../../../customHooks/useFilters";
import Pagination from "./Pagination";
import Charts from "../../utils/Charts";
import { usePaginate } from "../../../customHooks/usePaginate";

const TransactionList = () => {
  const { filters, user, categories } = useContext(GlobalContext);

  //sort transactions by date
  const sortByDate = (a, b) => (a.date < b.date ? 1 : -1);

  const sortedTransactions = user.transactions.sort(sortByDate);

  //Filters
  const [hideFilters, setHideFilters] = useState(true);

  //Transactions
  const filteredTransactions = applyFilters(sortedTransactions, filters);

  const toggleFiltersWindow = (e) => {
    e.preventDefault();
    setHideFilters(!hideFilters);
  };


  //Pagination
  const [transactionsPerPage, totalTransactions, currentPage, paginate, currentTransactions] = usePaginate(filteredTransactions);



  // function creates array for each category with sum of amounts
  const amounts = filteredTransactions.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }
    acc[item.category] += item.amount;
    return acc;
  }, {});

  // function that creates array with objects with category and amount
  const categoryAmounts = Object.keys(amounts).map((key) => {
    return {
      category: key,
      amount: amounts[key],
      color: categories.find((category) => category.name === key).color
    };
  }
  );





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
      <Charts categoryAmounts={categoryAmounts} />

      <div className="transactions">
        <ul>
          {user && currentTransactions.map((transaction) => {
            return <Transaction key={transaction._id} transaction={transaction} />;
          })}
        </ul>
        <Pagination transactionsPerPage={transactionsPerPage} totalTransactions={filteredTransactions.length} paginate={paginate} currentPage={currentPage} ttt={totalTransactions} />
      </div>
    </main>
  );
};

export default TransactionList;
