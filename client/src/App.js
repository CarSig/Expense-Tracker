import React, { useState, useContext } from "react";
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

  const scrollTheme = (input) => {
    if (input === "up") {
      if (counter < themes.length - 1) {
        setCounter(counter + 1);
      }
    } else {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }
    setTheme(themes[counter]);
    window.localStorage.removeItem("theme");
    window.localStorage.setItem("theme", `${theme}`);
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
