import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";



export const useFilters = () => {
  const { filters, setFilters } = useContext(GlobalContext);
  const [activeFilter, setActiveFilter] = useState({ date: false, amount: false, category: false, comment: false, repeating: false });
  const handleChangeFilter = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  const toggleFilterActivity = (filter, e) => {
    setActiveFilter({ ...activeFilter, [filter]: !activeFilter[filter] });
  };
  return [filters, handleChangeFilter, activeFilter, setActiveFilter, toggleFilterActivity]

};
