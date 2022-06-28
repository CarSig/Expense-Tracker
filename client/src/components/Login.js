import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { FiLogIn } from "react-icons/fi";
import { GlobalContext } from "../context/GlobalState";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const { setUser, user } = useContext(GlobalContext);

  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };

  const loginUser = async (e) => {
    e.preventDefault();

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
      localStorage.setItem("username", payload.username);

      // axios
      // .get("api/users")
      // .then(async (response) => {
      //     const data = await response.data;

      //     setUser(data);
      // })
      // .catch((err) => {
      //     console.log(err);
      // });

      // novi axios call GET - users/:id - za dobavljanje usera
      const update = await data.data.userData
      const token = localStorage.getItem("token");

      await axios({
        url: "api/users/" + update._id,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (response) => {
        const data = await response.data;
        setUser(data);
        prompt(JSON.stringify(data))
        prompt(JSON.stringify(user))
      }
      ).catch((err) => {
        console.log(err);
      }
      );


      alert(JSON.stringify(update._id) + "Login - line 46")
      alert(JSON.stringify(user) + "Login - line 47")



      setInvalidCredentials(false);
      window.location.href = "/settings";
    } else {
      setInvalidCredentials(true);
    }
  };

  return (
    <section className="container">
      {/*Alert*/}
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
        Don't have an account? <Link to="/register"> Register</Link>
      </p>
    </section>
  );
};

export default Login;
