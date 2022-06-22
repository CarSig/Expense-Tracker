import React, { useContext, useState } from "react";
import { useFilters } from "../customHooks/useFilters";

const Filters = ({ hideFilters, setHideFilters }) => {
  const [filters, handleChangeFilter, activeFilter, setActiveFilter, toggleFilterActivity] = useFilters()

  const closeFiltersWindow = (e) => {
    e.preventDefault();
    setHideFilters(true);
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
        className={`btn ${activeFilter.comment ? "btn-primary" : "btn-secondary"}`}
        onClick={() => {
          toggleFilterActivity("comment");
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
              <input type="number" name="minAmount" placeholder="amount" defaultValue={"from"} className="my-1" onChange={handleChangeFilter} />
            </div>
            <div className="amountFilter filter">
              <label htmlFor="maxAmount">Maximal amount</label>
              <input type="number" name="maxAmount" placeholder="amount" className="my-1" onChange={handleChangeFilter} />
            </div>
          </div>
        )}
        {activeFilter.category && (
          <div className="categoryFilter filter">
            <label htmlFor="category">Category </label>
            <select name="category" id="category" value="select" className="my-1" onChange={handleChangeFilter}>
              <option value="select" disabled hidden>
                Select Category
              </option>
              <option value="food">Food</option>
              <option value="pet">Pet</option>
              <option value="bar">Bars</option>
              <option value="travel">Travel</option>
              <option value="shopping">Shopping</option>
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
            <input type="checkbox" id="repeat" name="repeat" onChange={handleChangeFilter} />
          </div>
        )}

        {
          // if some filter is active, show button

          <div>
            <br /> <button className="btn btn-primary">Filter</button>
            <button className="btn ">Clear</button>
            <button className="btn btn-secondary" onClick={closeFiltersWindow}>
              {" "}
              Cancel
            </button>
          </div>
        }
      </form>
    </div>
  );
};

export default Filters;
