import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";



const NavBar = ({ route, setRoute }) => {
  const [signed, setSigned] = useState("");
  // const { route, setRoute } = useContext(GlobalContext);




  useEffect(() => {
    const storedAuthToken = localStorage.getItem("username");
    setSigned(storedAuthToken);
    console.log(signed);
  }, [localStorage]);

  const signOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setRoute("/");
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
        <small color="textSecondary">hello {signed}</small>

        <ul>
          <li className="linkNavBar">

            <p onClick={(() => setRoute("/add"))}>Add new transaction</p>
          </li>
          <li className="linkNavBar">
            <p onClick={(() => setRoute("/transactions"))} > Transactions</p>
          </li>
          <li className="linkNavBar">
            <p onClick={(() => setRoute("/statistics"))}>Statistics</p>
          </li>
          <li className="linkNavBar">
            <p onClick={(() => setRoute("/settings"))}>Settings</p>
          </li>
          <li><button onClick={(() => setRoute("/login"))}> Login</button></li>
          <li className="linkNavBar">
            <p color="default" onClick={signOut}>
              Sign out
            </p>
          </li>
        </ul>

      </nav>

    </div >
  );
};

export default NavBar;
