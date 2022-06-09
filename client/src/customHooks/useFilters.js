import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";


export const useFilters = (initialValues) => { 
    //initialValues is an object with all the default values of the form fields
    //addTransaction - function from GlobalState
    const { transactions } = useContext(GlobalContext);
    const [values, setValues] = useState(initialValues);
    const [filteredTransactions, setFilteredTransactions] = useState(transactions);
    
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        const newFilteredTransactions = transactions.filter(transaction => {
        const date = transaction.date;
        const startDate = values.startDate;
        const endDate = values.endDate;
        const text = values.text;
        const amount = transaction.amount;
        const isAmount = amount > 0 ? amount >= 0 : amount <= 0;
        const isText = text.length === 0 || transaction.category.toLowerCase().includes(text.toLowerCase()) || transaction.description.toLowerCase().includes(text.toLowerCase());
        const isDate = startDate.length === 0 || endDate.length === 0 ? true : date >= startDate && date <= endDate;
        return isAmount && isText && isDate;
        });
        setFilteredTransactions(newFilteredTransactions);
    };
    
    return [values, handleChange, onSubmit, filteredTransactions]; 
};