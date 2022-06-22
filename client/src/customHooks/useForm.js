import React, { useContext, useState } from "react";

import { GlobalContext } from "../context/GlobalState";



export const useForm = (initialValues) => {
  //initialValues is an object with all the default values of the form fields
  //addTransaction - function from GlobalState
  const { addTransaction } = useContext(GlobalContext);

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  //TODO: remove id generating when connected to database
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { ...values, _id: Math.floor(Math.random() * 100000000), amount: +values.amount };
    addTransaction(newTransaction);
    setValues(initialValues);
  };

  return [values, handleChange, onSubmit];
};
