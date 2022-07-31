import React, {useContext} from "react";
import { GlobalContext } from "../../globalContext";

const DatePicker = () => {
  const globalContext = useContext(GlobalContext)

  function dateChangeHandler(e) {
    globalContext.setFilters({...globalContext.filters, when: e.target.value})
  }

  return (
    <form action="/action_page.php">
      <p>When</p>
      <div className="d-flex flex-row justify-content-end align-items-center">
        <label htmlFor="move-in">
          <h4 className="m-0">{globalContext.filters.when? globalContext.filters.when: "Select Move-in date"}</h4>
        </label>
        <input className="calender" type="date" id="move-in" name="move-in" style={{cursor: "pointer"}} onChange={dateChangeHandler}/>
      </div>
    </form>
  );
};

export default DatePicker;
