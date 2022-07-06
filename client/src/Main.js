import React, { useState, useContext, useEffect } from "react";
import AddExpense from "./components/Transactions/AddNew/AddExpense";
import NavBar from "./components/NavBar";
import TransactionList from "./components/Transactions/List/TransactionList";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import Landing from "./components/Login_Register_Landing/Landing";
import Login from "./components/Login_Register_Landing/Login";
import Register from "./components/Login_Register_Landing/Register";
import Settings from "./components/Settings/Settings";


const Main = ({ scrollTheme }) => {
    const { signedIn, route, setRoute } = useContext(GlobalContext);

    useEffect(() => {
        (!signedIn && route !== "/register") && setRoute("/login");
    }, [route]);


    return (
        <div>

            <div style={{}}>
                <div className="btn" onClick={() => { scrollTheme("down"); }}>
                    {"Back" || "--End--"}
                </div>

                <div className="btn" onClick={() => { scrollTheme("up"); }}>
                    {"Next" || "--End--"}
                </div>
                <p>change themes</p>

                {signedIn && <div>
                    {route === "/" && <TransactionList />}
                    {route === "/add" && <AddExpense />}
                    {route === "/settings" && <Settings />}
                </div>}

                {!signedIn && <div>

                    {route === "/login" && <Login />}
                    {route === "/register" && <Register />}
                </div>}



            </div>
        </div>
    )
}

export default Main