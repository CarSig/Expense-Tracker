import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Landing = () => {
  const [setRoute] = useContext(GlobalContext);
  return (
    <section className="landing">
      <h1>LANDING PAGE</h1>
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Expense Tracker</h1>
          <p className="lead">keep track of your expenses </p>
          <div className="buttons">

            <button className="btn btn-primary" onClick={setRoute("/register")}>
              Sign up
            </button>
            <button className="btn" onClick={setRoute("/")}>
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
