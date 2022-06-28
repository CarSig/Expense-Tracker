import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalState";



const Settings = () => {

    const [loggedInUser, setLoggedInUser] = useState(null);
    const { user, setUser, filters } = useContext(GlobalContext);

    // useEffect(() => {
    // axios
    //     .get("api/users")
    //     .then(async (response) => {
    //         const data = await response.data;

    //         setUser(data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });



    //     axios({
    //         url: "api/logged",
    //         method: "GET",
    //         data: {
    //             username: localStorage.getItem("username")

    //         },
    //     }).then(async (response) => {

    //         const data = await response.data;
    //         console.log("data: ", data);
    //         setLoggedInUser(data);
    //     }).catch((err) => {
    //         console.log(err);
    //     })

    // }, []);


    return (

        <div>
            <h2>Settings</h2>
            <h3>Filters</h3>
            <pre>{localStorage.getItem("filters")}</pre>
            <h3>Storage</h3>
            <pre>{localStorage.getItem("userData")}</pre>
            <h3>User Logged</h3>
            <pre>{localStorage.getItem("username")}</pre>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <p>state</p>
            <pre>   <pre>{JSON.stringify(loggedInUser, null, 2)}</pre></pre>


        </div >
    );
};

export default Settings;
