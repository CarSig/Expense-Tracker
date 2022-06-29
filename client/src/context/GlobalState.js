import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { transactionArray } from "./transactionArray";





const initialState = {
  transactions: transactionArray,
  user:
  {
    a: "aaa",
    b: "bbb"
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
  categories: ["bar", "restaurant", "cafe", "other", "food", "pet", "travel", "shopping"],
  comments: []
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setUser(user) {
    dispatch({
      type: "SET_USER",
      payload: user

    })

  }
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
    console.log(filters)
  }

  function setCategories(categories) {
    dispatch({
      type: "SET_CATEGORIES",
      payload: categories,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ user: state.user, transactions: state.transactions, filters: state.filters, categories: state.categories, editTransaction, addTransaction, deleteTransaction, setFilters, setUser, setCategories }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
