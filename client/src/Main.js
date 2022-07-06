import React, { useContext, useEffect } from "react";
import AddExpense from "./components/Transactions/AddNew/AddExpense";
import TransactionList from "./components/Transactions/List/TransactionList";
import { GlobalContext } from "./context/GlobalState";
import Login from "./components/Login_Register_Landing/Login";
import Register from "./components/Login_Register_Landing/Register";
import Settings from "./components/Settings/Settings";


const Main = ({ scrollTheme }) => {
    const { signedIn, route, setRoute } = useContext(GlobalContext);

    useEffect(() => {
        (!signedIn && route !== "/register") && setRoute("/login");
        // eslint-disable-next-line 
    }, []);


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