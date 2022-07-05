import React, { useContext, useState } from "react";
import axios from "axios";

import { GlobalContext } from "../context/GlobalState";



export const useForm = (initialValues) => {
  const { addTransaction, user, setUser } = useContext(GlobalContext);
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
    console.log("here: ", newTransaction);
    // find and update user 

    const usr = JSON.parse(localStorage.getItem("userData"));
    const id = usr._id;
    const token = localStorage.getItem("token");


    axios.patch(`/api/users/new/${user._id}`,
      newTransaction
    ).then(async (res) => {
      const response = await res.data //.populate("transactions").exec()
      console.log("yyea: " + JSON.stringify(response))
      setUser(res.data.updatedUser);
    }
    ).catch((err) => {
      console.log(err);
    }
    ).then(axios({ // ovo mozda ni ne treba, ako mogu na setUser staviti ono sto je pod yyea
      url: "/api/users/new/" + id,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (response) => {
      const data = await response.data;
      localStorage.setItem("userData", JSON.stringify(data));
      console.log("data?==: ", data);
      setUser(data);

    }
    ).catch((err) => {
      console.log(err);
    }
    ))




  };










  return [values, handleChange, onSubmit];
};

