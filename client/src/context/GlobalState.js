import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state

const initialState = {
  transactions: [
    { _id: "5d2b2b7d1e6", amount: -32, category: "food", comment: "Edeka", date: "07/04/2022" },
    { _id: "5d2b28e0f7c", amount: -55, category: "pet", comment: "Ozzy", date: "17/04/2022" },
    { _id: "242b1e6b8e0", amount: 1232, category: "salary", comment: "salary", date: "07/04/2022" },
    { _id: "td2b28e0f7c", amount: -35, category: "bar", comment: "Ozzy", date: "17/04/2022" },
  ],
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
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
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
