import React, { useContext } from "react";

import { AiOutlineDelete } from "react-icons/ai";
// AiOutlineDelete;
// AiFillDelete
import { GlobalContext } from "../../../context/GlobalState";
import axios from "axios";

// const onDelete = async (e, transaction) => {
//   e.preventDefault();
//   deleteTransaction(transaction);


//   const usr = JSON.parse(localStorage.getItem("userData"));
//   const id = usr._id;
//   const token = localStorage.getItem("token");


//   axios.patch(`/api/users/deleteTransaction/${transaction}`,
//     newTransaction
//   ).then(async (res) => {
//     const response = await res.data //.populate("transactions").exec()
//     console.log("yyea: " + JSON.stringify(response))
//     setUser(res.data.updatedUser);
//   }
//   ).catch((err) => {
//     console.log(err);
//   }
//   ).then(axios({ // ovo mozda ni ne treba, ako mogu na setUser staviti ono sto je pod yyea
//     url: "/api/users/new/" + id,
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }).then(async (response) => {
//     const data = await response.data;
//     localStorage.setItem("userData", JSON.stringify(data));
//     console.log("data?==: ", data);
//     setUser(data);

//   }
//   ).catch((err) => {
//     console.log(err);
//   }
//   ))




// };





const Transaction = ({ transaction }) => {
  const { deleteTransaction, user, categories } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  const signClass = transaction.amount < 0 ? "minus" : "plus";

  //TODO : cleanup when fix category colors
  const categoryColor = (transaction.category === "select" || transaction.category === "concert") ? "white" : categories.find((category) => category.name === transaction.category).color



  return (
    <li key={transaction._id}>
      <div className={`transaction ${signClass} my-1`}>
        <p className=" medium" style={{ color: `${transaction.amount > 0 ? "green" : "red"}` }}>
          {sign} {Math.abs(transaction.amount)} €
        </p>
        <p style={{ paddingLeft: "4px", borderLeft: `4px solid ${categoryColor}` }}>{transaction.category}</p>





        {
          <p>{transaction.date}</p>
        }        <AiOutlineDelete className="delete" />
      </div>
    </li >
  );
};

export default Transaction;
