
import React, { useState, useContext, useEffect } from "react";
import AddExpense from "./components/Transactions/AddExpense";
import NavBar from "./components/NavBar";
import TransactionList from "./components/Transactions/TransactionList";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import Landing from "./components/Login_Register_Landing/Landing";
import Login from "./components/Login_Register_Landing/Login";
import Register from "./components/Login_Register_Landing/Register";
import Settings from "./components/Settings/Settings";


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
