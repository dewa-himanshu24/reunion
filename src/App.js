import React, { useState } from "react";
import "./App.css";
import Filters from "./component/Filters";
import Head from "./component/Head";
import Navbar from "./component/Navbar";
import PropertyGrid from "./component/PropertyGrid";
import { mockData } from "./mockData";
import { GlobalContext } from "./globalContext";
import Footer from "./component/Footer";

function App() {
  const [filteredData, setFilteredData] = useState(mockData.properties);
  const [filters, setFilters] = useState({
    location: "New York",
    when: new Date().toISOString().split("T")[0],
    priceMin: 0,
    priceMax: 5000,
    propertyType: "House",
  });

  function sortResults() {
    let newResults = [];
    newResults = mockData.properties.filter((property) => {
      if (
        property.location.state === filters.location &&
        property.propertyType === filters.propertyType &&
        +new Date(property.moveInDate) >= +new Date(filters.when) &&
        property.rentAmount >= filters.priceMin &&
        property.rentAmount <= filters.priceMax
      ) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredData(newResults);
  }

  return (
    <GlobalContext.Provider value={{ filters, setFilters }}>
      <div className="container-fluid">
        <Navbar />
        <Head />
        <Filters filter={filters} sortResults={sortResults} />
        <PropertyGrid filteredData={filteredData} />
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
