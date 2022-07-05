
import React, { useState, useContext, useEffect } from "react";
import AddExpense from "./components/Transactions/AddNew/AddExpense";
import NavBar from "./components/NavBar";
import TransactionList from "./components/Transactions/List/TransactionList";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import Landing from "./components/Login_Register_Landing/Landing";
import Login from "./components/Login_Register_Landing/Login";
import Register from "./components/Login_Register_Landing/Register";
import Settings from "./components/Settings/Settings";
import Main from "./Main";



const themes = ["dark", "light", "blue", "pink", "purpleYellow", "test"];

function App() {

  const { transactions, user, setUser, signedIn, setSignedIn, route, setRoute } = useContext(GlobalContext);
  useEffect(() => {
    console.log(route)

    localStorage.setItem("route", route);
  }, [route])


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
        <div>
          <NavBar />
          <br />
          <br />
          <br />
          <Main scrollTheme={scrollTheme} />


        </div>


      </GlobalProvider >
    </div >
  );
}

export default App;
