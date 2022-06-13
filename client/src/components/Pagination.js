import React from "react";

const Pagination = ({ transactionsPerPage, totalTransactions, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTransactions / transactionsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li onClick={() => paginate(number)} key={number} className={`${currentPage === number && "active"}`}>
            <div href="!#">{number}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
