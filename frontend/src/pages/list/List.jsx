import React from "react";
import "./list.css";
const List = () => {
  return (
    <div className="listContainer">
      <div className="searchList">
        <h3>Search</h3>
        <div className="searchitems">
          <h3>Destination</h3>
          <input type="text" />
          <h3>Check-in Date</h3>
          <input type="text" />
          <div className="option">
            <label htmlFor="minPrice">Min Price per night</label>
            <input type="text" id="minPrice" />
          </div>
          <div  className="option">
            <label htmlFor="maxPrice">Max Price per night</label>
            <input type="text" id="maxPrice" />
          </div>
          <div  className="option">
            <label htmlFor="adult">Adult</label>
            <input type="text" id="adult" />
          </div>
          <div  className="option">
            <label htmlFor="children">Children</label>
            <input type="text" id="children" />
          </div>
          <div  className="option">
            <label htmlFor="room">Room</label>
            <input type="text" id="room" />
          </div>
          <button>Search</button>
        </div>
      </div>
      <div className="hotelList"></div>
    </div>
  );
};

export default List;
