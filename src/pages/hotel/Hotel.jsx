import "./hotel.css";
import Navbar from "./../../components/navbar/Navbar";
import Header from "./../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/49199532.jpg?k=0db8ba1bc1f296fbac68711c0d65e34dcdc749f45e866e7b5a1e97a162338ea0&o=&hp=1",
    },
    {
      src: "https://content.r9cdn.net/himg/26/d3/d7/ice-51750-71801109_3XL-089765.jpg",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/3a/30/52/metropole-hotel-kampala.jpg",
    },
    {
      src: "https://image-tc.galaxy.tf/wijpeg-6tqnroekc7d20dwkyityk9yjy/file.jpg?width=1600&height=1066",
    },
    {
      src: "https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
    },
    {
      src: "https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
    },
  ];

  // handle open
  const handleOpen = () => {
    setOpen(true);
  };

  // handleMove
const handleMove = (direction) => {
  let newSlideNumber;
  if(direction === 'l'){
    newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
  } else {
    newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
  }
  setSlideNumber(newSlideNumber)
}




  return (
    <div>
      <Navbar />
      <Header type="list" />
      {/* for slider */}
      {open && (
        <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close'onClick={() =>setOpen(!open)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('l')}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} className="sliderImg" alt="" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow'  onClick={() => handleMove('r')}/>
        </div>
      )}

      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <hi className="hotelTitle">Grand Hotel</hi>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Kanyagoga St 123 Koch Kweyo</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 500 from Main
          </span>
          <span className="hotelPriceHighlight">
            Book and Stay over at UGX 90,000 and get free meals.
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          {/* hotel details */}
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the Heart of Kweyo</h1>
              <p className="hotelDesc">
                Grand Hotel just a 10-minute walk from the National Center for
                the Performing Arts and Tian'anmen Square. Built in 1956 it has
                old school charm and many rooms still feature high, crown-molded
                ceilings. A 2012 renovation brought all rooms and services up to
                modern day scratch and guestrooms come equipped with free Wi-Fi
                and all the usual amenities required for a comfortable stay.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9 night stay</h1>
              <span>
                A 2012 renovation brought all rooms and services up to modern
                day scratch and guestrooms come equipped with free Wi-Fi
              </span>
              <h2>
                <b>UGX 995,000</b>(9 nights)
              </h2>
              <button>Reserve or book now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
