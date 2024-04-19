import React from "react";
import "./list.css";
import hotel1 from "../../assets/hotel2.jpg";
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
          <div className="option">
            <label htmlFor="maxPrice">Max Price per night</label>
            <input type="text" id="maxPrice" />
          </div>
          <div className="option">
            <label htmlFor="adult">Adult</label>
            <input type="text" id="adult" />
          </div>
          <div className="option">
            <label htmlFor="children">Children</label>
            <input type="text" id="children" />
          </div>
          <div className="option">
            <label htmlFor="room">Room</label>
            <input type="text" id="room" />
          </div>
          <button>Search</button>
        </div>
      </div>
      <div className="hotelList">
        <div className="hotel">
          <div className="hotelImg">
            <img src={hotel1} alt="" />
          </div>
          <div className="hotelInfo">
            <div className="leftInfo">
              <h3>Tower Street Apartments</h3>
              <p>500m from center</p>
              <button>free airport tax</button>
              <p className="studio">Studio Apartments with Air conditioning</p>
              <p>Entire studio -1 bathroom -21m 1 full bed</p>
              <p className="freeCan">Free cancellation</p>
              <p>You can cancel later , so lock in this great price today</p>
            </div>
            <div className="rightInfo">
              <div className="righttop">
                <h3>Excellent</h3>
                <button>8.9</button>
              </div>
              <div className="rightbottom">
                <h4>$123</h4>
                <p>includes taxes and fees</p>
                <button>See availability</button>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel">
          <div className="hotelImg">
            <img src={hotel1} alt="" />
          </div>
          <div className="hotelInfo">
            <div className="leftInfo">
              <h3>Tower Street Apartments</h3>
              <p>500m from center</p>
              <button>free airport tax</button>
              <p className="studio">Studio Apartments with Air conditioning</p>
              <p>Entire studio -1 bathroom -21m 1 full bed</p>
              <p className="freeCan">Free cancellation</p>
              <p>You can cancel later , so lock in this great price today</p>
            </div>
            <div className="rightInfo">
              <div className="righttop">
                <h3>Excellent</h3>
                <button>8.9</button>
              </div>
              <div className="rightbottom">
                <h4>$123</h4>
                <p>includes taxes and fees</p>
                <button>See availability</button>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel">
          <div className="hotelImg">
            <img src={hotel1} alt="" />
          </div>
          <div className="hotelInfo">
            <div className="leftInfo">
              <h3>Tower Street Apartments</h3>
              <p>500m from center</p>
              <button>free airport tax</button>
              <p className="studio">Studio Apartments with Air conditioning</p>
              <p>Entire studio -1 bathroom -21m 1 full bed</p>
              <p className="freeCan">Free cancellation</p>
              <p>You can cancel later , so lock in this great price today</p>
            </div>
            <div className="rightInfo">
              <div className="righttop">
                <h3>Excellent</h3>
                <button>8.9</button>
              </div>
              <div className="rightbottom">
                <h4>$123</h4>
                <p>includes taxes and fees</p>
                <button>See availability</button>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel">
          <div className="hotelImg">
            <img src={hotel1} alt="" />
          </div>
          <div className="hotelInfo">
            <div className="leftInfo">
              <h3>Tower Street Apartments</h3>
              <p>500m from center</p>
              <button>free airport tax</button>
              <p className="studio">Studio Apartments with Air conditioning</p>
              <p>Entire studio -1 bathroom -21m 1 full bed</p>
              <p className="freeCan">Free cancellation</p>
              <p>You can cancel later , so lock in this great price today</p>
            </div>
            <div className="rightInfo">
              <div className="righttop">
                <h3>Excellent</h3>
                <button>8.9</button>
              </div>
              <div className="rightbottom">
                <h4>$123</h4>
                <p>includes taxes and fees</p>
                <button>See availability</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
