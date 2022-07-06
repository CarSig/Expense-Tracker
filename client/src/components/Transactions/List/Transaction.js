import React, { useContext } from "react";

import { AiOutlineDelete } from "react-icons/ai";
// AiOutlineDelete;
// AiFillDelete
import { GlobalContext } from "../../../context/GlobalState";
import axios from "axios";





const Transaction = ({ transaction }) => {
  const { deleteTransaction, user, setUser, categories } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  const signClass = transaction.amount < 0 ? "minus" : "plus";

  //TODO : cleanup when fix category colors
  const categoryColor = (transaction.category === "select" || transaction.category === "concert") ? "white" : categories.find((category) => category.name === transaction.category).color




  const onDelete = async (e, uId, tId) => {
    // const usr = JSON.parse(localStorage.getItem("userData"));
    // const Uid = usr._id;
    e.preventDefault();
    deleteTransaction(transaction._id);
    await axios.delete(`/api/users/deleteTransaction/${uId}/${tId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(async (response) => {
      const data = await response.data;
      // localStorage.setItem("userData", JSON.stringify(data));
      console.log("deleted?==: ", data);
      setUser(data);

    }).catch((err) => {
      console.log(err);
    })

  };









  return (
    <li key={transaction._id}>
      <div className={`transaction ${signClass} my-1`}>
        <p className=" medium" style={{ color: `${transaction.amount > 0 ? "green" : "red"}` }}>
          {sign} {Math.abs(transaction.amount)} €
        </p>
        <p style={{ paddingLeft: "12px", borderLeft: `18px solid ${categoryColor}` }}>{transaction.category}</p>






        <p>{transaction.date}</p>
        <div className="delete" ><AiOutlineDelete onClick={(e) => onDelete(e, transaction.user, transaction._id)} />
        </div></div>

    </li >
  );
};

export default Transaction;
