import React, { useState, useContext, useEffect } from "react";


import { FiLogIn } from "react-icons/fi";
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const { setUser, user, signedIn, setSignedIn, setRoute } = useContext(GlobalContext);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

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
      const userLog = await data.data.userData
      localStorage.setItem("token", data.data.user);
      localStorage.setItem("userData", JSON.stringify(data.data.userData));
      localStorage.setItem("username", payload.username);
      setUser(userLog);
      setInvalidCredentials(false);

    } else {
      setInvalidCredentials(true);
    }
    setRoute("/")
    setSignedIn(true)
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
      <pre>existing test user:</pre>
      <pre>username: lb </pre>
      <pre>password: 123456</pre>
      <form className="form" onSubmit={loginUser}>
        <input className="my-1" type="text" name="username" placeholder="username" value={values.username} onChange={handleChange("username")} />
        <input className="my-1" type="password" name="password" placeholder="password" value={values.password} onChange={handleChange("password")} />
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>

      <p className="my-1">
        Don't have an account? <h4 style={{ cursor: "pointer" }} onClick={(() => { setRoute("/register") })}> Register</h4>
      </p>
    </section>
  );
};

export default Login;
