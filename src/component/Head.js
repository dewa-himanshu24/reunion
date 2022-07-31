import React from "react";

const Head = () => {
  return (
    <div className="container my-5">
      <div className="d-flex">
        <h2 className="p-2 flex-grow-1">Search properties to rent</h2>
        <div className="p-2">
          <form className="d-flex" role="search">
            <input
              className="form-control head-search me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Head;
