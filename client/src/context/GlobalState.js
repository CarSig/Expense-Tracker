import React, { createContext, useReducer, useState, useEffect } from "react";
import AppReducer from "./AppReducer";
import { transactionArray } from "./transactionArray";
import axios from "axios";




// const [user, setUser] = useState({});

// useEffect(() => {
//   let user = axios.get("/api/context").then((res) => {
//     const result = res.data;
//     console.log(result);
//     return result;

//   }

//   )
//   setUser(user);
// }, [])






const initialState = {
  transactions: transactionArray,
  user: "STARO",
  filters: {
    startDate: "",
    endDate: "",
    minAmount: "",
    maxAmount: "",
    category: "",
    comment: "",
    repeat: "",
  },
  categories: [{ name: "bar", color: "red" }, { name: "restaurant", color: "lightblue" }, { name: "cafe", color: "yellow" }, { name: "other", color: "orange" }, { name: "food", color: "purple" }, { name: "pet", color: "pink" }, { name: "travel", color: "black" }, { name: "shopping", color: "grey" }],
  comments: [],
  route: "/",
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

  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
    alert("Transaction added")

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

  function setCategories(categories) {
    dispatch({
      type: "SET_CATEGORIES",
      payload: categories,
    });
  }
  function setRoute(route) {
    dispatch({
      type: "SET_ROUTE",
      payload: route,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ user: state.user, transactions: state.transactions, filters: state.filters, categories: state.categories, editTransaction, addTransaction, deleteTransaction, setFilters, setUser, setCategories, setRoute }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
