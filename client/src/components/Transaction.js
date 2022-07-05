import React, { useContext } from "react";

import { AiOutlineDelete } from "react-icons/ai";
// AiOutlineDelete;
// AiFillDelete
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  const signClass = transaction.amount < 0 ? "minus" : "plus";
  return (
    <li key={transaction._id}>
      <div className={`transaction ${signClass} my-1`}>
        <p className=" medium" style={{ color: `${transaction.amount > 0 ? "green" : "red"}` }}>
          {sign} {Math.abs(transaction.amount)} €
        </p>
        <p>{transaction.category}</p>
        {
          //    <p>{transaction.date.toISOString().slice(0, 10)}</p>
        }        <AiOutlineDelete className="delete" onClick={() => deleteTransaction(transaction._id)} />
      </div>
    </li>
  );
};

export default Transaction;
