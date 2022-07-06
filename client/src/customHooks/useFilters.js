import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const useFilters = () => {
  const { filters, setFilters } = useContext(GlobalContext);
  const [activeFilter, setActiveFilter] = useState({ date: false, amount: false, category: false, comment: false, repeating: false });

  const toggleFilterActivity = (e) => {
    setActiveFilter({ ...activeFilter, [e.target.name]: !activeFilter[e.target.name] });
  };

  const handleChangeFilter = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    localStorage.setItem("filters", JSON.stringify(filters));
  };
  const resetFilters = (e) => {
    e.preventDefault()
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


export function applyFilters(transactions, filters) {

  //TODO: logic for repeat once repeat is implemented
  const result = transactions.filter((transaction) => {
    // const transactionDate = transaction.date.toISOString().slice(0, 10)
    // const startDate = filters.startDate;
    // const endDate = filters.endDate;
    const minAmount = filters.minAmount;
    const maxAmount = filters.maxAmount;
    const isAmount = (!minAmount || minAmount < transaction.amount) && (!maxAmount || maxAmount > transaction.amount);
    const comment = transaction?.comment?.toLowerCase().includes(filters?.comment?.toLowerCase()) || filters.comment === ""
    const category = transaction.category === filters.category || filters.category === ""
    //const repeat = transaction.repeat === filters.repeat  // TODO:if unchecked, it will return all transactions
    //const isDate = (!startDate || startDate <= transactionDate) && (!endDate || endDate >= transactionDate);
    return isAmount && comment && category // && isDate;
  });
  return result;
}