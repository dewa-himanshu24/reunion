import React, {useContext} from "react";
import { GlobalContext } from "../../globalContext";
import { locations } from "../../mockData";


const Location = () => {
  const globalContext = useContext(GlobalContext)

function generateLocationList() {
  return locations.map((locationItem) => (
    <a className="dropdown-item" href="#" onClick={() => globalContext.setFilters({...globalContext.filters, location: locationItem})}>
    {locationItem}, USA 
  </a>
  ))
}


  return (
    <>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
          onClick={generateLocationList}
        >
          <h4>{globalContext.filters.location}, USA</h4>
        </button>

        <ul className="dropdown-menu">
          <li>
            {generateLocationList()}
          </li>
        </ul>

      </div>
    </>
  );
};

export default Location;
