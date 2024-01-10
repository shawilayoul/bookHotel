import React from 'react'
import "./navBar.css"
import { MdLocalTaxi, MdPersonPin, MdFlight, MdOutlineAttractions, MdLocalHotel, MdCarRental } from "react-icons/md"
import { GiHamburgerMenu, GiWorld } from "react-icons/gi"

const NavBar = () => {
    return (
        <div className='naVcontainer'>
            <div className="nav">
                <div className="navTop">
                    <span className="topNavleft">
                        <h2>Booking.com</h2>
                    </span>
                    <div className="topNavright">
                        <div className="navmobile">  <GiHamburgerMenu /><MdPersonPin /></div>
                        <div className="navbtn">
                            <button className='registerbtn'>To register</button>
                            <button className='sign'>Sign in</button>
                        </div>
                    </div>
                </div>
                <div className="navBottom">
                    <span className="navItem active">
                        < MdLocalHotel />
                        <h3>Accomadation</h3>
                    </span>
                    <span className="navItem">
                        <MdFlight />
                        <h3>Flights</h3>
                    </span>
                    <span className="navItem">
                        <GiWorld />
                        <h3>Flights + hotel</h3>
                    </span>
                    <span className="navItem">
                        <MdCarRental />
                        <h3>Rental cars</h3>
                    </span>
                    <span className="navItem">
                        <MdOutlineAttractions />
                        <h3>Attractions</h3>
                    </span>
                    <span className="navItem">
                        <MdLocalTaxi />
                        <h3>Airport Taxis</h3>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavBar
