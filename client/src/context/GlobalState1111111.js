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


let callUser = axios.get("/api/context").then((res) => {
  const result = res.data;
  console.log(result);
  return result
});



// const initialState = { ...data, categories: ["bar", "restaurant", "cafe", "other", "food", "pet", "travel", "shopping"] }



//Create context
const Context = React.createContext({});
export const GlobalContext = init => createContext(Context);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(AppReducer, Context);


  const getAffiliates = async () => {
    setLoading(true)
    const newText = await callUser();
    setData(newText)
    setLoading(false)
  }

  useEffect(() => {
    getAffiliates()
  }, [])



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

  return (
    <GlobalContext.Provider
      value={{ loading, transactions: data.transactions, editTransaction, addTransaction, deleteTransaction, setFilters, setUser, setCategories }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
