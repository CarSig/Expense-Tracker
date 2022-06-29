import React, { useContext, useState } from "react";
import axios from "axios";

import { GlobalContext } from "../context/GlobalState";



export const useForm = (initialValues) => {
  const { addTransaction, user } = useContext(GlobalContext);
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  //TODO: remove id generating when connected to database
  const onSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = {
      amount: +values.amount,
      newCategory: values.newCategory,
      category: values.newCategory ? values.newCategory : values.newCategory === "select" ? "other" : values.category,
      comment: values.comment,
      date: values.date,

      user: user._id,
      repeating: values.repeating,
    };

    console.log("type: ", newTransaction);
    // find and update user 
    await axios.patch(`/api/users/new/${user._id}`,

      newTransaction
    ).then((res) => {

      console.log(res.data);
    }
    ).catch((err) => {
      console.log(err);
    }
    )

  };

  return [values, handleChange, onSubmit];
};

