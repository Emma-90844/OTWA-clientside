import { Link } from 'react-router-dom';
import './searchItem.css'

const SearchItem = () => {
  return (
   <div className="searchItem">
    <img src="https://media.istockphoto.com/photos/modern-custom-suburban-home-exterior-picture-id1255835530?k=20&m=1255835530&s=612x612&w=0&h=TMCGkCK7j0kVESPPAKCrrOFkig3aTgqeXPWFxSZ-XIA=" alt="" className='siImg'/>
   <div className="siDesc">
    <h1 className="siTitle">Tower Street Apartment</h1>
    <span className="siDistance">500m from Center</span>
    <span className="siTaxiOp">Free airport Taxi</span>
    <span className="siSubTitle">Studio Aparment with Air Conditioning</span>
    <span className="siFeatures">Entire Studio . 1 Bathroom .21m sq 1 full bed</span>
    <span className="siCancelOp">Free Cancelation</span>
    <span className="siCancelOpSubtitle">You can cancel later, so lock in this great proice today!</span>
   </div>
 
   <div className="siDetails">
    <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
    </div>
    <div className="siDetailsTexts">
        <span className="siPrice">UGX 350,000</span>
        <span className="siTaxOp">Includes Taxes and fees</span>
        <Link to="/hotels/335">
        <button className="siCheckButton">See Availability</button>
        </Link>
       
    </div>
   </div>
   </div>
  )
}

export default SearchItem;