import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { transactionArray } from "./transactionArray";
import axios from "axios";

// const ovoTest = () => {
//   axios
//     .get("api/users")
//     .then(async (response) => {
//       const data = await response.data;

//       return data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// const getUser = async () => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     const response = await axios.get("/api/users/62ac22d414c706292634478f", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data.user;
//   }

//   return null;
// }


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
  return (
    <GlobalContext.Provider
      value={{ user: state.user, transactions: state.transactions, filters: state.filters, categories: state.categories, editTransaction, addTransaction, deleteTransaction, setFilters, setUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
