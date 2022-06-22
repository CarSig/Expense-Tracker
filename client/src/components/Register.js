import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { BsPersonPlusFill } from "react-icons/bs";
import { useForm } from "../customHooks/useForm";

const Register = () => {
  const [values, handleChange] = useForm({
    username: "",
    firstname: "",
    lastName: "",
    address: "",
    role: "",
    email: "",
    password: "",
    imgNumber: "",
    gender: "",
  });

  const navigate = useNavigate();

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
        signedUser === null ? navigate("/login") : navigate("/");
        alert("Registration was successful");
      })
      .catch((error) => {
        console.log(payload);
        console.log(error);
      });
  };

  return (
    <section className="container">
      <h1 className="large text-primary">{signedUser === null ? "Registration" : "Add new user"}</h1>
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
            Already have an account? <Link to="/login"> Sign in</Link>
          </p>
        </div>
      )}
    </section>
  );
};

export default Register;
