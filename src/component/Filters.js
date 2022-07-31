import React from "react";
import DatePicker from "./filters/DatePicker";
import Location from "./filters/Location";
import Price from "./filters/Price";
import PropertyType from "./filters/PropertyType";


const Filters = (props) => {
  return (
    <div className="container text-start">
      <div className="d-flex justify-content-between">

        <div className="p-2">
          {" "}
          <p className="mx-2">Location</p>
          <Location/>
        </div>

        <div className="p-2" >
          <DatePicker />
        </div>

        <div className="p-2">
          <p className="mx-2">Price</p>
          {/* <h4>$500-$2500</h4> */}
          <Price/>
        </div>

        <div className="p-2">
          <p className="mx-2">Property Type</p>
          <PropertyType/>
        </div>

        <div className="p-2 align-self-center">
          {" "}
          <button
            type="button"
            className="btn btn-dark"
            onClick={props.sortResults}
          >
            Search
          </button>
        </div>

      </div>
    </div>
  );
};

export default Filters;
