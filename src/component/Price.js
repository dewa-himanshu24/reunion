import React, { useContext, useEffect } from "react";
import ReactSlider from "react-slider";
import { GlobalContext } from "../globalContext";
import "./Price.css";


const Price = () => {
  const globalContext = useContext(GlobalContext)

  useEffect(() => {
    console.log(globalContext);
  }, [globalContext])


  return (
    <>
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <h4>Price Range</h4>
        </button>
        <ul className="dropdown-menu">
          <li>
            <main>
              <div className="container">
                {/* creating reAct slider */}
                <ReactSlider
                  defaultValue={[globalContext.filters.priceMin, globalContext.filters.priceMax]}
                  className="slider"
                  trackClassName="tracker"
                  min={0}
                  max={5000}
                  minDistance={500}
                  step={500}
                  withTracks={true}
                  pearling={true}
                  renderThumb={(props) => {
                    return <div {...props} className="thumb"></div>;
                  }}
                  renderTrack={(props) => {
                    return <div {...props} className="track"></div>;
                  }}
                  onChange={([min, max]) => {
                    globalContext.setFilters({...globalContext.filters, priceMin: min, priceMax: max});
                  }}
                />
                <div className="values-wrapper">
                  <p>
                    Min Value:
                    <span>{globalContext.filters.priceMin}</span>
                  </p>
                  <p>
                    Max Value:
                    <span>{globalContext.filters.priceMax}</span>
                  </p>
                </div>
              </div>
            </main>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Price;
