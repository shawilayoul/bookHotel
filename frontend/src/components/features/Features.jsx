import './features.css'
import city1 from '../../assets/city1.jpg'
import city2 from '../../assets/city2.jpg'
import city3 from '../../assets/city3.jpg'

const Features = () => {
  return (
    <div className='featureContainer'>
        <div className="fcity">
            <div className="FcityImag">
             <img src={city1} alt="" />
            </div>
            <div className="cityTitle">
                <h1> Dublin</h1>
                <span>123 Properties</span>
            </div>
       </div>
       <div className="fcity">
            <div className="FcityImag">
             <img src={city2} alt="" />
            </div>
            <div className="cityTitle">
                <h1>Austin</h1>
                <span>1524 Properties</span>
            </div>
       </div>
       <div className="fcity">
            <div className="FcityImag">
             <img src={city3} alt="" />
            </div>
            <div className="cityTitle">
                <h1>Paris</h1>
                <span>700 Properties</span>
            </div>
       </div>
    </div>
  )
}

export default Features
