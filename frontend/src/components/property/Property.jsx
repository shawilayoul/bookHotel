import React from 'react'
import './property.css'
import hotel1 from '../../assets/hotel1.jpg'
import hotel2 from '../../assets/hotel2.jpg'
import hotel3 from '../../assets/hotel3.jpg'
import hotel4 from '../../assets/hotel4.jpg'
import hotel5 from '../../assets/hotel5.jpg'

const Property = () => {
  return (
    <div className='propertyContainer'>
      <div className="property">
        <div className="propertyImg">
          <img src={hotel4} alt="" />
        </div>
        <div className="propertyTiltle">
           <h2>Hotels</h2>
           <span>150 hotels</span>
        </div>
      </div>
      <div className="property">
        <div className="propertyImg">
          <img src={hotel5} alt="" />
        </div>
        <div className="propertyTiltle">
           <h2>Villa</h2>
           <span>100 villas</span>
        </div>
      </div>
      <div className="property">
        <div className="propertyImg">
          <img src={hotel3} alt="" />
        </div>
        <div className="propertyTiltle">
           <h2>Rosorts</h2>
           <span>200 rosorts</span>
        </div>
      </div>
      <div className="property">
        <div className="propertyImg">
          <img src={hotel2} alt="" />
        </div>
        <div className="propertyTiltle">
           <h2>Cabins</h2>
           <span>80 cabins</span>
        </div>
      </div>
      <div className="property">
        <div className="propertyImg">
          <img src={hotel1} alt="" />
        </div>
        <div className="propertyTiltle">
           <h2>Appartment</h2>
           <span>50 appartments</span>
        </div>
      </div>
    </div>
  )
}

export default Property
