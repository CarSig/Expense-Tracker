import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { transactionArray } from "./transactionArray";
import axios from "axios";


const getUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const response = await axios.get("/api/users/62ac22d414c706292634478f", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user;
  }

  return null;
}



console.log("getUser: ", getUser());
// const getUser = async () => {
//   const user = await axios
//     .get(`/users/62ac22d414c706292634478f`)
//     .then(async (response) => {
//       const data = await response.data;

//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   return user;
// };


// getUser()

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
    console.log(filters)
  }
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, editTransaction, addTransaction, deleteTransaction, filters: state.filters, setFilters }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
