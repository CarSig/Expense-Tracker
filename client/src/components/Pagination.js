import React from "react";

const Pagination = ({ transactionsPerPage, totalTransactions, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTransactions / transactionsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul style={{ display: "flex" }}>
        {pageNumbers.map((number) => (
          <li style={{ border: "1px solid black", margin: "0.5rem", padding: "0.5rem", background: "grey" }} key={number}>
            <div onClick={() => paginate(number)} href="!#">
              {number}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
