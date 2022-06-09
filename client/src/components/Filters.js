import React, { useContext, useState } from "react";

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState({ date: false, amount: false, category: false, comment: false, repeating: false });

  const toggleFilter = (filter) => {
    setActiveFilter({ ...activeFilter, [filter]: !activeFilter[filter] });
  };

  return (
    <div className="container">
      <button
        className="btn btn-primary"
        onClick={() => {
          toggleFilter("date");
        }}
      >
        Date
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          toggleFilter("amount");
        }}
      >
        Amount
      </button>

      <button
        className="btn btn-primary"
        onClick={() => {
          toggleFilter("category");
        }}
      >
        Category
      </button>
      <button className="btn btn-primary">Description</button>
      <button className="btn btn-primary">Repeating</button>
      <form>
        {activeFilter.date && (
          <div className="filterWrapper">
            <div className="dateFilter">
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
            <div className="amountFilter">
              <label htmlFor="minAmount">Minimal amount</label>
              <input type="number" name="minAmount" placeholder="amount" defaultValue={"from"} className="my-1" />
            </div>
            <div className="amountFilter ">
              <label htmlFor="maxAmount">Maximal amount</label>
              <input type="number" name="maxAmount" placeholder="amount" className="my-1" />
            </div>
          </div>
        )}
        {activeFilter.category && (
          <div className="categoryFilter filter">
            <label htmlFor="category">Category </label>
            <input type="text" name="category" placeholder="category" className="my-1" />
          </div>
        )}
        <div className="categoryFilter filter">
          <label htmlFor="repeat">Comment </label>
          <input type="text" name="category" placeholder="comment" className="my-1" />
        </div>
        <div className="repeatFilter">
          <label htmlFor="repeat">Repeat</label>
          <input type="checkbox" id="repeat" />
        </div>
        <div className="btn btn-primary">Submit</div>
      </form>
    </div>
  );
};

export default Filters;
