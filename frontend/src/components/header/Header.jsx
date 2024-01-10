import React from 'react'
import { BiBed } from "react-icons/bi"
import { SlCalender } from "react-icons/sl"
import { BsPerson } from "react-icons/bs"
import "./header.css"

const Header = () => {
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
                        <SlCalender />
                        <span>Date Arrival -- Departure date</span>
                    </div>
                    <div className="hitem">
                        <BsPerson />
                        <span>1 adult</span>
                        <span>0 childern</span>
                        <span>1 bedroom</span>
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
