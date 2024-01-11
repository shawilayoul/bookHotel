import React from 'react'
import { BiBed } from "react-icons/bi"
import { addDays } from 'date-fns';
import { useState } from 'react';
import { SlCalender } from "react-icons/sl"
import { BsPerson } from "react-icons/bs"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format';
import "./header.css"
import { DateRange} from 'react-date-range';

const Header = () => {
    const[open,setOpen]= useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);
      const[options, setOptions] = useState({
        aduilt: 1,
        chiidren: 0,
        room: 1
      })
    return (
        <div className='headerContainer'>
            <div className="header">
                <div className="headerTitle">
                    <h1>Find your next stay</h1>
                    <p>Search for deals on hotels ,self-catering
                        accommodations and more</p>
                </div>
                <div className="hitems">
                    <div className="hitem">
                        <BiBed />
                        <span>Where are you going ?</span>
                    </div>
                    <div className="hitem">
                        <div className='range'>
                        <div className="arrival" onClick={()=>setOpen(!open)}>
                        <div>
                        <SlCalender  className='cal'/>
                        </div>
                        <div>
                        <span>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
                        </div>
                        </div>
                        {open &&
                        <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='dateRange'
                       />}
                        </div>
                    </div>
                    <div className="hitem">
                        <div>
                        <div className='opetionsearch'>
                         <BsPerson />
                        <span>{`${options.aduilt} adult`}</span>
                        <span>{`${options.chiidren} children`}</span>
                        <span>{`${options.room} room`}</span>
                        </div>
                        <div className="options">
                           <div className="optionsItem">
                            <div>Adult</div>
                            <div className="counterbtn">
                             <button className="increabtn">+</button>
                             <span className="countervalue">1</span>
                             <button className="decreabtn">-</button>
                             </div>
                           </div>
                           <div className="optionsItem">
                            <div>Children</div>
                            <div className="counterbtn">
                             <button className="increabtn">+</button>
                             <span className="countervalue">0</span>
                             <button className="decreabtn">-</button>
                             </div>
                           </div>
                           <div className="optionsItem">
                            <div>room</div>
                            <div className="counterbtn">
                             <button className="increabtn">+</button>
                             <span className="countervalue">1</span>
                             <button className="decreabtn">-</button>
                             </div>
                           </div>
                        </div>
                        </div>
                       
                    </div>
                    <div className="hitem">
                        <button className='hbtn'>Research</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
