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
            <a href="/">Go to Dashboard</a>
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
