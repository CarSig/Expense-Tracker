import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalState";






const UpdateUser = ({ handleChange }) => {
    const { user, setUser } = useContext(GlobalContext);
    return (
        <div>
            <form className="form" >

                <input type="text" name="username" placeholder="username" className="my-1" value={user.username} onChange={handleChange("username")} />
                <input type="email" name="email" placeholder="email" className="my-1" value={user.email} onChange={handleChange("email")} />
                <input type="text" name="firstName" placeholder="firstName" className="my-1" value={user.firstName} onChange={handleChange("firstName")} />
                <input type="text" name="lastName" placeholder="lastName" className="my-1" value={user.lastName} onChange={handleChange("lastName")} />

                <input type="password" name="password" placeholder="password" className="my-1" value={user.password} onChange={handleChange("password")} />

                <button className="btn btn-primary">Submit</button>
            </form>
            <br></br>
            <br></br>
        </div>
    );
};

export default UpdateUser;