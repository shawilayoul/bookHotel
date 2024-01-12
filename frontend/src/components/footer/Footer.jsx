import './footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='footerContainer'>
       <div className="searchBar">
         <div className="searchTitle">
            <h3>Save time, Save money!</h3>
            <h5>sign up and we'll send the best deals to you</h5>
             </div>
            <div className="search">
                <input type="text" placeholder='Your Email' />
                <button>Subscripe</button>
                <div className="checkbtn">
                  <input type="checkbox"      className='checked' />
                <span>send me a link to get the FREE Booking.com app!</span>
                </div>
            </div>
            
       </div>
    </div>
  )
}

export default Footer
