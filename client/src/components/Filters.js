import React, { useContext, useState } from "react";

const Filters = ({ hideFilters, setHideFilters }) => {
  const [activeFilter, setActiveFilter] = useState({ date: false, amount: false, category: false, description: false, repeating: false });

  const toggleFilterActivity = (filter, e) => {
    setActiveFilter({ ...activeFilter, [filter]: !activeFilter[filter] });
  };

  return (
    <div className={`container popup ${hideFilters && "hidden"}`}>
      <button
        className={`btn ${activeFilter.date ? "btn-primary" : "btn-secondary"}`}
        onClick={() => {
          toggleFilterActivity("date");
        }}
      >
        Date
      </button>
      <button
        className={`btn ${activeFilter.amount ? "btn-primary" : "btn-secondary"}`}
        onClick={() => {
          toggleFilterActivity("amount");
        }}
      >
        Amount
      </button>

      <button
        className={`btn ${activeFilter.category ? "btn-primary" : "btn-secondary"}`}
        onClick={() => {
          toggleFilterActivity("category");
        }}
      >
        Category
      </button>

      <button
        className={`btn ${activeFilter.description ? "btn-primary" : "btn-secondary"}`}
        onClick={() => {
          toggleFilterActivity("description");
        }}
      >
        Description
      </button>
      <button
        className={`btn ${activeFilter.repeating ? "btn-primary" : "btn-secondary"}`}
        onClick={() => {
          toggleFilterActivity("repeating");
        }}
      >
        Repeating
      </button>
      <form>
        {activeFilter.date && (
          <div className="filterWrapper">
            <div className="dateFilter filter">
              <label htmlFor="repeat">From</label>
              <input type="date" name="startDate" placeholder="comment" defaultValue={"from"} className="my-1" />
            </div>
            <div className="dateFilter">
              <label htmlFor="repeat">To</label>
              <input type="date" name="endDate" placeholder="comment" defaultValue={"from"} className="my-1" />
            </div>
          </div>
        )}

        {activeFilter.amount && (
          <div className="filterWrapper">
            <div className="amountFilter filter">
              <label htmlFor="minAmount">Minimal amount</label>
              <input type="number" name="minAmount" placeholder="amount" defaultValue={"from"} className="my-1" />
            </div>
            <div className="amountFilter filter">
              <label htmlFor="maxAmount">Maximal amount</label>
              <input type="number" name="maxAmount" placeholder="amount" className="my-1" />
            </div>
          </div>
        )}
        {activeFilter.category && (
          <div className="categoryFilter filter">
            <label htmlFor="category">Category </label>
            <select name="category" id="category" value="select" className="my-1">
              <option value="select" disabled hidden>
                Select Category
              </option>
              <option value="food">Food</option>
              <option value="pet">Pet</option>
              <option value="Bars">Bars</option>
              <option value="Travel">Travel</option>
            </select>
          </div>
        )}

        {activeFilter.description && (
          <div className="commentFilter filter">
            <label htmlFor="repeat">Description </label>
            <input type="text" name="comment" placeholder="comment" className="my-1" />
          </div>
        )}

        {activeFilter.repeating && (
          <div className="repeatFilter ">
            <label htmlFor="repeat">Repeat</label>
            <input type="checkbox" id="repeat" />
          </div>
        )}

        {
          // if some filter is active, show button

          <div>
            <br /> <button className="btn btn-primary">Filter</button>
            <button className="btn ">Clear</button>
            <button className="btn btn-secondary"> Cancel</button>
          </div>
        }
      </form>
    </div>
  );
};

export default Filters;
