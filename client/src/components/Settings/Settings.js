import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalState";
import UpdateUser from "./UpdateUser";


const Settings = () => {

    const [loggedInUser, setLoggedInUser] = useState(null);
    const { user, setUser, filters } = useContext(GlobalContext);
    const [updateReady, setUpdateReady] = useState(false);

    // TODO: mijenjat
    const deleteUser = () => {
        axios.delete(`/api/users/${user._id}`).then((res) => console.log("Deleted Sucessfully"));

    };

    const updateUserFunc = (e) => {
        e.preventDefault();
        // TODO: mijenjat
        axios.put(`/api/users/${user._id}`, { user }).then((res) => console.log("updated sucessfully"));
        toggleReady();
    };

    const handleChange = (input) => (e) => {
        setUser({ ...user, [input]: e.target.value });
        console.log(user);
    };

    const toggleReady = () => {
        setUpdateReady(!updateReady);
    };


    return (

        <section className="container ">
            <h1 className="large text-primary ">Settings</h1>
            <div className="profile-grid my-4">
                <div className="profile-top bg-primary p-2">

                    <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "30px" }}>
                            <p color="textSecondary">Username</p>
                            <p color="textSecondary">Email</p>
                            <p color="textSecondary">First and Last Name</p>

                        </div>
                        <div>
                            <p color="textPrimary">{user.username}</p>
                            <p color="textPrimary">{user.email}</p>
                            <p color="textPrimary">
                                {user.firstName} {user.lastName}
                            </p>


                        </div>
                    </div>
                </div>

            </div>

            <button className="btn btn-primary " onClick={toggleReady}>
                {updateReady ? "Cancel" : "Update User"}
            </button>

            {updateReady && (
                <UpdateUser user={user} setUser={setUser} handleChange={handleChange} updateUserFunc={updateUserFunc}></UpdateUser>
            )}





            <div>

            </div>
        </section>
    );
};

export default Settings;
