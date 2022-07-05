import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { user } = useContext(GlobalContext);
  const amounts = user.transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="balance">
      <h2>Balance</h2>
      <h3>${total}</h3>
    </div>
  );
};

export default Balance;
