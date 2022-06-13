import React from "react";
import { useForm } from "../customHooks/useForm";


const AddExpense = () => {
  let formattedDate = new Date().toISOString().slice(0, 10);
  const [values, handleChange, onSubmit] = useForm({ amount: 0, category: "select", comment: "", date: formattedDate, _id: "" });

  return (
    <main className="container">
      <form onSubmit={onSubmit}>
        <h2 className="large text-primary">Add Expense</h2>
        <input type="number" name="amount" value={values.amount} placeholder="amount" className="my-1" onChange={handleChange} />

        <select name="category" id="category" value={values.category} className="my-1" onChange={handleChange}>
          <option value="select" disabled hidden>
            Select Category
          </option>
          <option value="food">Food</option>
          <option value="pet">Pet</option>
          <option value="Bars">Bars</option>
          <option value="Travel">Travel</option>
        </select>

        <input type="text" name="comment" value={values.comment} placeholder="comment" className="my-1" onChange={handleChange} />
        <input type="date" name="date" value={values.date} placeholder="comment" className="my-1" onChange={handleChange} />

        <div style={{ display: "flex" }}>
          <input type="checkbox" id="repeat" name="repeat" className="checkbox" />

          <label htmlFor="repeat">Make repeating</label>
        </div>

        <button className="btn btn-primary my-2">Submit</button>
      </form>

      <a href="/" className="btn ">
        See transactions
      </a>
    </main>
  );
};

export default AddExpense;
