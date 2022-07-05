import React, { useState, useContext, useEffect } from "react";


import { FiLogIn } from "react-icons/fi";
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const { setUser, user } = useContext(GlobalContext);

  useEffect(() => {
    // update localStorage filters
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);



  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };



  //TODO: add context to Login  component and use it in App.js update it before login
  // pogle moze li da se korist case "SET_USER" u appReducer.js

  const loginUser = async (e) => {
    e.preventDefault();


    let callUser = await axios.get("/api/context").then((res) => {
      const result = res.data

      return result
    });

    const contextUser = await callUser;

    const payload = {
      username: values.username,
      password: values.password,
    };

    const response = await axios({
      url: "/api/login",
      method: "POST",
      data: payload,
    });

    const data = await response;




    // AUTHENTICATION 2
    if (data.data.user) {

      localStorage.setItem("token", data.data.user);


      localStorage.setItem("userData", JSON.stringify(data.data.userData));
      setUser(data.data.userData);

      localStorage.setItem("username", payload.username);
      setUser(data.data.userData);

      // novi axios call GET - users/:id - za dobavljanje usera
      const log = await data.data.userData
      const token = localStorage.getItem("token");




      axios({
        url: "api/users/new/" + log._id,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (response) => {
        const data = await response.data;
        setUser(data);
        setUser(contextUser)
      }
      ).catch((err) => {
        console.log(err);
      }
      );


      setInvalidCredentials(false);

    } else {
      setInvalidCredentials(true);
    }
    return data
  };

  return (
    <section className="container">

      {invalidCredentials && <div className="alert alert-danger">Invalid Credentials</div>}

      <h1 className="large text-primary">Login</h1>
      <p className="lead">
        {" "}
        <FiLogIn />
        Sign into your account
      </p>
      <form className="form" onSubmit={loginUser}>
        <input className="my-1" type="text" name="username" placeholder="username" value={values.username} onChange={handleChange("username")} />

        <input className="my-1" type="password" name="password" placeholder="password" value={values.password} onChange={handleChange("password")} />

        <input type="submit" value="Login" className="btn btn-primary" />
      </form>

      <p className="my-1">
        Don't have an account? <a > Register</a>
      </p>
    </section>
  );
};

export default Login;
