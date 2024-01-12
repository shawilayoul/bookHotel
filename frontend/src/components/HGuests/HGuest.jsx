import './hfuest.css'
import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room2.jpg'
import room3 from '../../assets/room3.jpg'
import room4 from '../../assets/room4.jpg'
import room5 from '../../assets/room5.jpg'

const HGuest = () => {
  return (
    <div className='homeGuestContainer'>
      <div className="homGuestItem">
        <div className="homguestImg">
            <img src={room1} alt="" />
        </div>
        <div className="homeGuestTiltle">
           <h3>Aparthotel star miaso</h3>
           <h5>Madrid</h5>
           <h5>Starting from 150 $</h5>
           <div className="rate">
            <button>8.9</button>
            <span>Excellenct</span>
           </div>
        </div>
      </div>
      <div className="homGuestItem">
        <div className="homguestImg">
            <img src={room2} alt="" />
        </div>
        <div className="homeGuestTiltle">
           <h3>Aparthotel star miaso</h3>
           <h5>Madrid</h5>
           <h5>Starting from 150 $</h5>
           <div className="rate">
            <button>8.9</button>
            <span>Excellenct</span>
           </div>
        </div>
      </div>
      <div className="homGuestItem">
        <div className="homguestImg">
            <img src={room3} alt="" />
        </div>
        <div className="homeGuestTiltle">
           <h3>Aparthotel star miaso</h3>
           <h5>Madrid</h5>
           <h5>Starting from 150 $</h5>
           <div className="rate">
            <button>8.9</button>
            <span>Excellenct</span>
           </div>
        </div>
      </div>
      <div className="homGuestItem">
        <div className="homguestImg">
            <img src={room4} alt="" />
        </div>
        <div className="homeGuestTiltle">
           <h3>Aparthotel star miaso</h3>
           <h5>Madrid</h5>
           <h5>Starting from 150 $</h5>
           <div className="rate">
            <button>8.9</button>
            <span>Excellenct</span>
           </div>
        </div>
      </div>
      <div className="homGuestItem">
        <div className="homguestImg">
            <img src={room5} alt="" />
        </div>
        <div className="homeGuestTiltle">
           <h3>Aparthotel star miaso</h3>
           <h5>Madrid</h5>
           <h5>Starting from 150 $</h5>
           <div className="rate">
            <button>8.9</button>
            <span>Excellenct</span>
           </div>
        </div>
      </div>
    </div>
  )
}
export default HGuest
