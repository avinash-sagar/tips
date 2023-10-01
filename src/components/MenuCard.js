// import { fa-bed } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import SearchCard from './SearchCard';

const MenuCard = ({ menuData }) => {
  const [isGO, setIsGO]  = useState(false);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    from : "",
    to : "",
    checkIn : "",
    checkOut : ""
  });
    return (
      <div className="menuCard">
        <div className="menuCardHeader">
          <div>
            <p style={{opacity:"0.6", cursor:"pointer"}} ><img width={40} src={'/images/hotel.png'}/>Hotel</p>
          </div>
          <div>
            <p style={{opacity:"0.6",cursor:"pointer", borderBottom : '1px solid blue', borderWidth:'2px'}}><img width={40} src={'/images/flights.jpg'}/>Flight</p>
          </div>
          <div>
            <p style={{opacity:"0.6",cursor:"pointer"}}><img width={30} src={'/images/cars.jpg'}/>Car Rental</p>
          </div>
        </div>
        <div className="divider2"></div>
        <div className="menu-cardItem">
          <div className="menu-input-title">
            <label className="ps-2">From</label>
            <input onClick={()=> {
              setVisible(true)
              setIsGO(false)
            } }  type="text" className="form-control form-input" placeholder="where are you from ?"  />
          </div>
          <img width={40} src={'/images/arrow.jpg'} />
          <div className="menu-input-title">
            <label className="ps-2">To</label>
            <input onClick={()=> {
              setVisible(true)
              setIsGO(true)
            } } type="text" className="form-control form-input" placeholder="Going to"  />
          </div>
          <img width={40} src={'/images/arrow.jpg'} />
          <div className="menu-input-title">
            <label className="ps-2">Check-In</label>
            <input  type="date" className="form-control form-input" placeholder="Check-In"  />
          </div>
          <img width={40} src={'/images/arrow.jpg'} />
          <div className="menu-input-title">
            <label className="ps-2">Check Out</label>
            <input type="date" className="form-control form-input" placeholder="Check Out"  />
          </div>
          <div className="cardButton">
            <p>Search</p>
          </div>
        </div>
       {visible &&  <SearchCard isGO={isGO} /> }
      </div>
    );
  };
  export default MenuCard;