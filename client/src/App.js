import { set } from "mongoose";
import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddExpense from "./components/AddExpense";
import NavBar from "./components/NavBar";
import TransactionList from "./components/TransactionList";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";

const themes = ["dark", "light", "blue", "pink", "purpleYellow", "test"];

function App() {
  const { transactions } = useContext(GlobalContext);
  const themeStorage = localStorage.getItem("theme");
  const [theme, setTheme] = useState(themeStorage);

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTheme(themes[counter]);
    window.localStorage.setItem("theme", `${theme}`);
  }, [counter]);

  const scrollTheme = (input) => {
    if (input === "up") {
      if (counter < themes.length - 1) {
        setCounter(counter + 1);
      } else {
        setCounter(0);
      }
    } else {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        setCounter(themes.length - 1);
      }
    }
  };

  return (
    <div className={`${theme} theme`}>
      <GlobalProvider>
        <br />
        <br />
        <br />

        <div
          className="btn"
          onClick={() => {
            scrollTheme("down");
          }}
        >
          {"Back" || "--End--"}
        </div>

        <div
          className="btn"
          onClick={() => {
            scrollTheme("up");
          }}
        >
          {"Next" || "--End--"}
        </div>

        <NavBar />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TransactionList transactions={transactions} />} />

            <Route path="/add" element={<AddExpense />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
