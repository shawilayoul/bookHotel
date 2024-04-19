import React from "react";
import { BiBed } from "react-icons/bi";
import { addDays } from "date-fns";
import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import format from "date-fns/format";
import "./header.css";
import { DateRange } from "react-date-range";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  function handleOption(name, operator) {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operator === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  }
  return (
    <div className="headerContainer">
      <div className="header">
        <div className="headerTitle">
          <h1>Find your next stay</h1>
          <p>
            Search for deals on hotels ,self-catering accommodations and more
          </p>
        </div>
        <div className="hitems">
          <div className="hitem">
            <BiBed />
           <input type="text" placeholder="Where are you going ?" />
          </div>
          <div className="hitem">
            <div className="range">
              <div className="arrival" onClick={() => setOpen(!open)}>
                <div>
                  <SlCalender className="cal" />
                </div>
                <div>
                  <span>{`${format(
                    date[0].startDate,
                    "MM/dd/yyyy"
                  )} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
                </div>
              </div>
              
              {open && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="dateRange"
                />
              )}
            </div>
          </div>
          <div className="hitem">
            <div>
              <div className="opetionsearch" onClick={() => setIsOpen(!isOpen)}>
                <BsPerson />
                <span>{`${options.adult} adult`}</span>
                <span>{`${options.children} children`}</span>
                <span>{`${options.room} room`}</span>
              </div>
              {isOpen && (
                <div className="options">
                  <div className="optionsItem">
                    <div>Adult</div>
                    <div className="counterbtn">
                      <button
                        className="increabtn"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                      <span className="countervalue">{options.adult}</span>
                      <button
                        className="decreabtn"
                        disabled={options.adult <= 1}
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <div>Children</div>
                    <div className="counterbtn">
                      <button
                        className="increabtn"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                      <span className="countervalue">{options.children}</span>
                      <button
                        className="decreabtn"
                        disabled={options.children <= 0}
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="optionsItem">
                    <div>room</div>
                    <div className="counterbtn">
                      <button
                        className="increabtn"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                      <span className="countervalue">{options.room}</span>
                      <button
                        className="decreabtn"
                        disabled={options.room <= 1}
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="hitem">
            <button className="hbtn">Research</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
