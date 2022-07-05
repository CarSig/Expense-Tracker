
import React, { useState, useContext, useEffect } from "react";
import AddExpense from "./components/AddExpense";
import NavBar from "./components/NavBar";
import TransactionList from "./components/TransactionList";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Settings from "./components/Settings";
import Chart from "./components/Chart";

const themes = ["dark", "light", "blue", "pink", "purpleYellow", "test"];

function App() {

  const { transactions, user, setUser, } = useContext(GlobalContext);
  const [route, setRoute] = useState("/");



  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  //THEME
  let themeStorage = localStorage.getItem("theme");
  const [theme, setTheme] = useState(themeStorage || "light");
  const [counter, setCounter] = useState(+localStorage.getItem("counter") || 0);

  useEffect(() => {
    setTheme(themes[counter]);
    window.localStorage.setItem("theme", `${themes[counter]}`);
  }, [counter]);


  const scrollTheme = input => {
    if (input === "up") {
      counter < themes.length - 1 ? setCounter(counter + 1) : setCounter(0)
    } else {
      counter > 0 ? setCounter(counter - 1) : setCounter(themes.length - 1)
    };

    window.localStorage.setItem("counter", `${counter + 1}`);
  };







  return (
    <div className={`${theme} theme`}>
      <GlobalProvider>

        <NavBar route={route} setRoute={setRoute} />
        <br />
        <br />
        <br />

        <div style={{}}>
          <div className="btn" onClick={() => { scrollTheme("down"); }}>
            {"Back" || "--End--"}
          </div>

          <div className="btn" onClick={() => { scrollTheme("up"); }}>
            {"Next" || "--End--"}
          </div>



          {route === "/transactions" && <TransactionList />}
          {route === "/add" && <AddExpense />}
          {route === "/chart" && <Chart />}
          {route === "/settings" && <Settings />}


          {
            // if not logged in
            false &&
            <div>
              {route === "/login" && <Login setRoute={setRoute} />}
              {route === "/register" && <Register setRoute={setRoute} />}
              {route === "/landing" && <Landing setRoute={setRoute} />}</div>}
        </div>
        <Login />

      </GlobalProvider>
    </div>
  );
}

export default App;
