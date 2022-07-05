import React, { useState, useContext } from "react";
import { useForm } from "../../customHooks/useForm";
import { GlobalContext } from "../../context/GlobalState";






const AddExpense = () => {
  const { categories, user } = useContext(GlobalContext);

  let formattedDate = new Date().toISOString().slice(0, 10);
  const [values, handleChange, onSubmit] = useForm({ amount: 0, category: "select", comment: "", date: formattedDate, newCategory: "" });
  const [isNewCategory, setIsNewCategory] = useState(false);

  const toggleCategory = (e) => {
    e.preventDefault()
    setIsNewCategory(!isNewCategory)
  }
  return (
    <main className="container">
      <form >
        <h2 className="large text-primary">Add Expense</h2>
        <input type="number" name="amount" value={values.amount} placeholder="amount" className="my-1" onChange={handleChange} />
        {//TODO: 1.input affects state
          //2.color picker
        }
        <div className="categoryInput">
          {isNewCategory ? <div className="categoryInput"> <input type="text" name="newCategory" placeholder="add new category" className="my-1" onChange={handleChange} value={values.newCategory} />
          </div> : <select name="category" id="category" value={values.category} className="my-1" onChange={handleChange}>
            <option value="select" disabled hidden>
              Select Category
            </option>
            {categories.map(category => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}

          </select>}

          <button className={`btn btn-${isNewCategory ? "secondary" : "primary"}`} onClick={toggleCategory} >{`${isNewCategory ? "Select" : "Add New"}`}</button>


        </div>

        <input type="text" name="comment" value={values.comment} placeholder="comment" className="my-1" onChange={handleChange} />
        <input type="date" name="date" value={values.date} placeholder="comment" className="my-1" onChange={handleChange} />

        <div style={{ display: "flex" }}>
          <input type="checkbox" id="repeat" name="repeat" className="checkbox" />

          <label htmlFor="repeat">Make repeating</label>
        </div>

        <button onClick={onSubmit} className="btn btn-primary my-2">Submit</button>
      </form>

      <a href="/transactions" className="btn ">
        See transactions
      </a>
    </main>
  );
};

export default AddExpense;
