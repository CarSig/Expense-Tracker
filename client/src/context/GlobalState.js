import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { transactionArray } from "./transactionArray";

const initialState = {
  transactions: transactionArray,

  user: {
    name: "",
    email: "",
    password: "",
    _id: "",
    categories: [],
  },
  filters: {
    startDate: "",
    endDate: "",
    minAmount: "",
    maxAmount: "",
    category: "",
    comment: "",
    repeat: "",
  },
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions Transactions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
    console.log(id);
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
    console.log(transaction);
  }

  function editTransaction(transaction) {
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: transaction,
    });
  }

  function setFilters(filters) {
    dispatch({
      type: "SET_FILTERS",
      payload: filters,
    });
  }
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, editTransaction, addTransaction, deleteTransaction, filters: state.filters, setFilters }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
