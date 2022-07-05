import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import Balance from "./Balance";
import Filters from "./Filters";
import IncomeExpenses from "./IncomeExpenses";
import Transaction from "./Transaction";
import { useFilters, applyFilters } from "../../../customHooks/useFilters";
import Pagination from "./Pagination";
import DoughnutChart from "../../utils/Charts";
import { usePaginate } from "../../../customHooks/usePaginate";

const TransactionList = () => {
  const { transactions, filters, user } = useContext(GlobalContext);

  //sort transactions by date
  const sortByDate = (a, b) => (a.date < b.date ? 1 : -1);
  const userOBJ = JSON.parse(localStorage.getItem("userData"));

  // const sortedTransactions = userOBJ.transactions // .sort(sortByDate);
  const sortedTransactions = user.transactions.sort(sortByDate);



  //Filters
  const [hideFilters, setHideFilters] = useState(true);

  //Transactions
  const [hideTransactions, setHideTransactions] = useState(true);

  const filteredTransactions = applyFilters(sortedTransactions, filters);

  const toggleFiltersWindow = (e) => {
    e.preventDefault();
    setHideFilters(!hideFilters);
  };

  const toggleTransactionsWindow = (e) => {
    e.preventDefault();
    setHideTransactions(!hideTransactions);
  }

  //Pagination
  const [transactionsPerPage, totalTransactions, currentPage, paginate, currentTransactions] = usePaginate(filteredTransactions);

  //TODO: refactor to separate components
  //-------CHARTS logic-----------

  const categories = [...new Set(filteredTransactions.map((transaction) => transaction.category))];


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

      <button onClick={toggleTransactionsWindow}>{hideTransactions ? "Show Transacitons" : "Hide Transactions"}</button>
      <div className="transactions">

        <ul>
          {user && currentTransactions.map((transaction) => {
            return <Transaction key={transaction._id} transaction={transaction} />;
          })}
        </ul>
        <Pagination transactionsPerPage={transactionsPerPage} totalTransactions={filteredTransactions.length} paginate={paginate} currentPage={currentPage} />
      </div>
    </main>
  );
};

export default TransactionList;
