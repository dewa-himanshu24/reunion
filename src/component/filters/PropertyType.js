import React, {useContext} from "react";
import { GlobalContext } from "../../globalContext";
import { propertyType } from '../../mockData';


const PropertyType = () => {
  const globalContext = useContext(GlobalContext)

  function generateHouseTypeList() {
    return propertyType.map((propertyItem) => (
      <a className="dropdown-item" href="#" onClick={() => globalContext.setFilters({...globalContext.filters, propertyType: propertyItem})}>
      {propertyItem}
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
          onClick={generateHouseTypeList}
        >
          <h4>{globalContext.filters.propertyType}</h4>
        </button>

        <ul className="dropdown-menu">
          <li>
            {generateHouseTypeList()}
          </li>
        </ul>

      </div>
    </>
  )
}

export default PropertyType