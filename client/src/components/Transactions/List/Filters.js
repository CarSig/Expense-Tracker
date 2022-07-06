import React, { useEffect, useState, useContext } from "react";
import { useFilters } from "../../../customHooks/useFilters";
import AddCategory from "../AddNew/AddCategory";
import { GlobalContext } from "../../../context/GlobalState";

const Filters = ({ hideFilters, setHideFilters }) => {
  const [filters, handleChangeFilter, activeFilter, toggleFilterActivity, resetFilters] = useFilters()

  const { categories } = useContext(GlobalContext);

  useEffect(() => {
    // update localStorage filters
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);



  const closeFiltersWindow = (e) => {
    e.preventDefault();
    setHideFilters(true);
  };
  return (
    <div className={`container popup ${hideFilters && "hidden"}`}>
      <button
        className={`btn ${activeFilter.date ? "btn-primary" : "btn-secondary"}`}
        onClick={toggleFilterActivity}
        name="date"
      >
        Date
      </button>
      <button
        className={`btn ${activeFilter.amount ? "btn-primary" : "btn-secondary"}`}
        onClick={toggleFilterActivity}
        name="amount"
      >
        Amount
      </button>

      <button
        className={`btn ${activeFilter.category ? "btn-primary" : "btn-secondary"}`}
        onClick={toggleFilterActivity}
        name="category"
      >
        Category
      </button>

      <button
        className={`btn ${activeFilter.comment ? "btn-primary" : "btn-secondary"}`}
        onClick={toggleFilterActivity}
        name="comment"
      >
        Description
      </button>
      <button
        className={`btn ${activeFilter.repeating ? "btn-primary" : "btn-secondary"}`}
        onClick={toggleFilterActivity}
        name="repeating"
      >
        Repeating
      </button>
      <form>
        {activeFilter.date && (
          <div className="filterWrapper">
            <div className="dateFilter filter">
              <label htmlFor="repeat">From</label>
              <input type="date" name="startDate" placeholder="comment" defaultValue={"from"} className="my-1" onChange={handleChangeFilter} />
            </div>
            <div className="dateFilter">
              <label htmlFor="repeat">To</label>
              <input type="date" name="endDate" placeholder="comment" defaultValue={"from"} className="my-1" onChange={handleChangeFilter} />
            </div>
          </div>
        )}

        {activeFilter.amount && (
          <div className="filterWrapper">
            <div className="amountFilter filter">
              <label htmlFor="minAmount">Minimal amount</label>
              <input type="number" name="minAmount" placeholder="amount" className="my-1" onChange={handleChangeFilter} />
            </div>
            <div className="amountFilter filter">
              <label htmlFor="maxAmount">Maximal amount</label>
              <input type="number" name="maxAmount" placeholder="amount" className="my-1" onChange={handleChangeFilter} />
            </div>
          </div>
        )}
        {activeFilter.category && (
          <div className="categoryFilter filter display-flex">
            <label htmlFor="category">Category </label>
            <select name="category" id="category" className="my-1" onChange={handleChangeFilter}>
              <option value="select" disabled hidden>
                Select Category
              </option>
              {categories.map(category => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>))}
            </select>




          </div>
        )}

        {activeFilter.comment && (
          <div className="commentFilter filter">
            <label htmlFor="repeat">Description </label>
            <input type="text" name="comment" placeholder="comment" className="my-1" onChange={handleChangeFilter} />
          </div>
        )}

        {activeFilter.repeating && (
          <div className="repeatFilter ">
            <label htmlFor="repeat">Repeat</label>
            <input type="checkbox" id="repeat" name="repeat" onClick={handleChangeFilter} />
          </div>
        )}




        <div>
          <br />
          <button className="btn" onClick={resetFilters}>Reset Filters</button>
          <button className="btn btn-primary" onClick={closeFiltersWindow}>
            {" "}
            Hide Filters
          </button>
        </div>

      </form>
    </div >
  );
};

export default Filters;
