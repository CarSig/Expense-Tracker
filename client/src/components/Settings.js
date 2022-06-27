import React, { useState, useEffect } from "react";
import axios from "axios";




const Settings = () => {
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        axios
            .get("api/users")
            .then(async (response) => {
                const data = await response.data;
                console.log("data: ", data);
                setUsers(data);
            })
            .catch((err) => {
                console.log(err);
            });



        axios("api/logged").then(async (response) => {
            const data = await response.data;
            console.log("data: ", data);
            setLoggedInUser(data);
        }).catch((err) => {
            console.log(err);
        })

    }, []);


    return (

        <div>
            <h2>Settings</h2>
            <h3>User Logged</h3>
            <pre>{JSON.stringify(loggedInUser, null, 2)}</pre>

            <h1>Users</h1>
            <pre>{JSON.stringify(users, null, 2)}</pre>
            {
                users.map((user) => (
                    <div key={user._id}>
                        <h2>{user.username}</h2>
                        <p>{user.comments}</p>
                    </div>
                ))
            }
        </div >
    );
};

export default Settings;
