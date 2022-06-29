import React, { useState } from "react";

export const usePaginate = (arr) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [transactionsPerPage] = useState(10);
    const totalTransactions = arr.length;

    // get current transactions
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = arr.slice(indexOfFirstTransaction, indexOfLastTransaction)
    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    console.log(currentTransactions)
    return [transactionsPerPage, totalTransactions, currentPage, paginate, currentTransactions];
}