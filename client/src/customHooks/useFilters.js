import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";



export const useFilters = () => {
  const { transactions, filters, setFilters } = useContext(GlobalContext);

  const [activeFilter, setActiveFilter] = useState({ date: false, amount: false, category: false, comment: false, repeating: false });
  const toggleFilterActivity = (e) => {
    setActiveFilter({ ...activeFilter, [e.target.name]: !activeFilter[e.target.name] });
  };



  const handleChangeFilter = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };


  const resetFilters = (e) => {
    // e.preventDefault()
    // console.log(e.target.value)
    setFilters({
      startDate: "",
      endDate: "",
      minAmount: "",
      maxAmount: "",
      category: "",
      comment: "",
      repeat: "",
    })

  }
  // const filtered = transactions.filter((transaction) => {
  //   setFilteredTransactions=

  //     const startDate = filters.startDate;
  //     const endDate = filters.endDate;
  //   const minAmount = filters.minAmount;
  //   const maxAmount = filters.maxAmount;
  //   const isAmount = (!minAmount || minAmount < transaction.amount) && (!maxAmount || maxAmount > transaction.amount);
  //   const comment = transaction.comment.toLowerCase().includes(filters.comment.toLowerCase()) || filters.comment === ""
  //   const category = transaction.category === filters.category || filters.category === ""
  //   const repeat = transaction.repeat === filters.repeat
  //     const isDate = startDate.length === 0 || endDate.length === 0 ? true : date >= startDate && date <= endDate;

  //   const allFilters = isAmount && comment && category
  //   console.log("EEEEEEEE!DDDDDDDDD", transaction)
  //   return allFilters ? transaction : null;
  //    && isDate;
  // });



  return [filters, handleChangeFilter, activeFilter, toggleFilterActivity, resetFilters]

};
