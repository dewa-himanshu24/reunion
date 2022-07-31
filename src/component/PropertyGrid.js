import React, { useState } from "react";

const PropertyGrid = (props) => {
  const [wishListedIds, setWishListedIds] = useState({});

  function addToWishList(id) {
    setWishListedIds({ ...wishListedIds, [id]: !wishListedIds[id] });
  }

  function generatePropertyCard() {
    return props.filteredData.map((property) => (
      <div className="p-2" key={property.id}>
        <div className="card" style={{ width: "25rem" }}>
          <div
            className="card-img"
            style={{
              background: `url(${property.image})`,
              backgroundSize: "100% 100%",
              width: "100%",
              height: "200px",
            }}
          ></div>
          <div className="card-body p-2">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <p className="my-0">
                ${property.rentAmount}
                <span>/month</span>
              </p>
              <div className="">
                <img
                  src={
                    wishListedIds[property.id]
                      ? "./active-wishlist-icon.png"
                      : "./add-to-wishlist-icon.png"
                  }
                  style={{ width: "1.5rem", cursor: "pointer" }}
                  onClick={() => addToWishList(property.id)}
                />
              </div>
            </div>
            <h5 className="card-title">{property.name}</h5>
            <p className="card-text">
              {property.location.stateCode} {property.location.streetName}{" "}
              {property.location.cityName}, {property.location.state}
            </p>
            <hr />
            <div className="d-flex flex-row justify-content-between my-4">
              <div className="">
                <img
                  className="mx-2"
                  src="./bedroom-icon.png"
                  style={{ width: "1.5rem" }}
                />
                {property.beds} Beds
              </div>
              <div className="">
                <img
                  className="mx-2"
                  src="./restroom-icon.png"
                  style={{ width: "1.5rem" }}
                />
                {property.bathrooms} Bathrooms
              </div>
              <div className="">
                <img
                  className="mx-2"
                  src="area-icon.png"
                  style={{ width: "1.5rem" }}
                />
                {property.areaSize}&#13217; Beds
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between mb-3 mt-4">
        {generatePropertyCard()}
      </div>
    </div>
  );
};

export default PropertyGrid;
