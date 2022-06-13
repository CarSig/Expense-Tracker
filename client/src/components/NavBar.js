import React, { useState } from "react";

const NavBar = () => {
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
            <a href="/">Statistics</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
          <li>
            <a href="login" color="default">
              Sign out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
