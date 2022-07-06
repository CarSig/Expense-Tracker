
import React, { useState, useContext, useEffect } from "react";
import NavBar from "./components/NavBar";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import Main from "./Main";



const themes = ["dark", "light", "blue", "pink", "purpleYellow", "test"];

function App() {

  const { user, route } = useContext(GlobalContext);
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
