import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

// addTransaction(filters);

export const useFilters = (initialValues) => {

  const { transactions, filters, setFilters } = useContext(GlobalContext);



  const [filteredTransactions, setFilteredTransactions] = useState([])
  const handleChangeFilter = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  const onSubmitFilter = (e) => {
    e.preventDefault();
    const newFilteredTransactions = transactions.filter((transaction) => {
      const date = transaction.date;
      const startDate = filters.startDate;
      const endDate = filters.endDate;
      const text = filters.text;
      const minAmount = filters.minAmount;
      const maxAmount = filters.maxAmount;
      const isAmount = (!minAmount || minAmount < transaction.amount) && (!maxAmount || maxAmount > transaction.amount);
      const isText =
        text.length === 0 ||
        transaction.category.toLowerCase().includes(text.toLowerCase()) ||
        transaction.description.toLowerCase().includes(text.toLowerCase());
      const isDate = startDate.length === 0 || endDate.length === 0 ? true : date >= startDate && date <= endDate;
      return isAmount && isText && isDate;
    });
    setFilteredTransactions(newFilteredTransactions);
  };
  return [filters, handleChangeFilter, onSubmitFilter, filteredTransactions];
};
