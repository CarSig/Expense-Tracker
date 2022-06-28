import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [signed, setSigned] = useState("");

  useEffect(() => {
    const storedAuthToken = localStorage.getItem("username");
    setSigned(storedAuthToken);
    console.log(signed);
  }, [localStorage]);

  const signOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <div className="header">
      <nav className="navbar bg-navbar">
        <div>
          <h1>
            {" "}
            <a href="/">Expense Tracker</a>
          </h1>
        </div>
        <ul>
          <li>
            <a href="/add">Add new transaction</a>
          </li>
          <li>
            <a href="/">Transactions</a>
          </li>
          <li>
            <a href="/statistics">Statistics</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
          <li>
            <a href="login" color="default" onClick={signOut}>
              Sign out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
