import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const NavBar = ({ route, }) => {
  const { signedIn, setSignedIn, setRoute, user } = useContext(GlobalContext)
  // const { route, setRoute } = useContext(GlobalContext);


  useEffect(() => {
    const storedAuthToken = localStorage.getItem("username") || false;
    // setsignedInIn(storedAuthToken);
    console.log(signedIn);
  }, [localStorage]);

  const signOut = () => {
    console.log("signed in= ", signedIn)
    setSignedIn(false);
    console.log("signed in after= ", signedIn)

    setRoute("/login");
    // localStorage.setItem(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("payload");
    localStorage.removeItem("userData");
    localStorage.removeItem("id");
    localStorage.removeItem("filters");
    localStorage.removeItem("data");

  };
  return (
    <div className="header">
      <nav className="navbar bg-navbar">
        <div>
          <h1>
            {" "}
            <a onClick={(() => setRoute("/"))}>Expense Tracker</a>
          </h1>

        </div>
        <small color="textSecondary">{signedIn && `hello ${user.username}`}</small>

        <ul>
          <li className="linkNavBar">

            <p onClick={(() => setRoute("/add"))}>Add new transaction</p>
          </li>
          <li className="linkNavBar">
            <p onClick={(() => setRoute("/"))} > Transactions</p>
          </li>
          <li className="linkNavBar">
            <p onClick={(() => setRoute("/statistics"))}>Statistics</p>
          </li>
          <li className="linkNavBar">
            <p onClick={(() => setRoute("/settings"))}>Settings</p>
          </li>
          <li className="linkNavBar">
            {!signedIn ? <p onClick={(() => setRoute("/login"))}> Login</p>
              :
              <p color="default" onClick={signOut}>
                Sign out
              </p>}
          </li>
        </ul>

      </nav>

    </div >
  );
};

export default NavBar;
