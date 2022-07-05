import React, { useState } from "react";

import axios from "axios";

import { BsPersonPlusFill } from "react-icons/bs";
import { useForm } from "../../customHooks/useForm";

const Register = ({ setRoute }) => {

  const [values, handleChange] = useForm({
    username: "",
    firstName: "",
    lastName: "",
    address: "",
    role: "",
    email: "",
    password: "",
    imgNumber: "",
    gender: "",
  });



  //TODO: authorization
  const signedUser = localStorage.getItem("username");



  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      username: values.username,
      firstName: values.firstName,
      lastName: values.lastName,

      email: values.email,
      password: values.password,
    };

    axios({
      url: "/api/register",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server");
        alert("Registration was successful");
        signedUser === null ? setRoute("/login") : setRoute("/transactions")
      })
      .catch((error) => {
        console.log(payload);
        console.log(error);
      });
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Registration</h1>
      <p className="lead">
        <BsPersonPlusFill />
        Create new account{" "}
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <input className="my-1" type="text" name="username" placeholder="username" value={values.username} onChange={handleChange} required />
        <input className="my-1" type="password" name="password" placeholder="password" value={values.password} onChange={handleChange} />
        <input className="my-1" type="email" name="email" placeholder="email" value={values.email} onChange={handleChange} required />
        <input className="my-1" type="text" name="firstName" placeholder="firstName" value={values.firstName} onChange={handleChange} />
        <input className="my-1" type="text" name="lastName" placeholder="lastName" value={values.lastName} onChange={handleChange} />

        <input type="submit" value="Submit" className="btn btn-primary" />
        {/*<button>Submit</button>*/}
      </form>
      {signedUser === null && (
        <div>
          <p className="my-1">
            Already have an account?
          </p>
        </div>
      )}
    </section>
  );
};

export default Register;
