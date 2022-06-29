import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalState";



const Settings = () => {

    const [loggedInUser, setLoggedInUser] = useState(null);
    const { user, setUser, filters } = useContext(GlobalContext);




    return (

        <div>
            <h2>Settings</h2>



        </div >
    );
};

export default Settings;
