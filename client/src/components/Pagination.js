import React from "react";

const Pagination = ({ transactionsPerPage, totalTransactions, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTransactions / transactionsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination" >
        {pageNumbers.map((number) => (
          <li style={{ }} key={number}>
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
