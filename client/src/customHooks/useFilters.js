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
    localStorage.setItem("filters", JSON.stringify(filters));
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
    localStorage.setItem("filters", JSON.stringify(filters));
  }




  return [filters, handleChangeFilter, activeFilter, toggleFilterActivity, resetFilters]

};
