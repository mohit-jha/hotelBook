// FeaturedHotelsSection.js
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const FeaturedHotelCard = ({
  imageSrc,
  location,
  hotelName,
  startingPrice,
  rating,
}) => {
  return (
    <div className="card">
      <div className="card_head">
        <img src={imageSrc} className="card_img_top" alt={location} />
        <p className="location">
            <FontAwesomeIcon icon={faLocationDot} />
            {location}</p>
      </div>
      <div className="card_body">
        <h5 className="card_title">{hotelName}</h5>
        <div className="rating">
          <p className="card_text"> <strong>${startingPrice}</strong> <small>/starting at</small> </p>
          <span className="card_text">
            <strong> {rating} </strong><FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      </div>
    </div>
  );
};

const FeaturedHotelsSection = () => {
  const featuredHotelsData = [
    {
      id: 1,
      imageSrc:
        "https://booking.webestica.com/assets/images/category/hotel/01.jpg",
      location: "New York",
      hotelName: "Baga Comfort",
      startingPrice: 455,
      rating: 4.5,
    },
    {
      id: 2,
      imageSrc:
        "https://booking.webestica.com/assets/images/category/hotel/02.jpg",
      location: "California",
      hotelName: "New Apollo Hotel",
      startingPrice: 585,
      rating: 4.8,
    },
    {
      id: 3,
      imageSrc:
        "https://booking.webestica.com/assets/images/category/hotel/03.jpg",
      location: "Los Angeles",
      hotelName: "New Age Hotel",
      startingPrice: 385,
      rating: 4.6,
    },
    {
      id: 4,
      imageSrc:
        "https://booking.webestica.com/assets/images/category/hotel/04.jpg",
      location: "Chicago",
      hotelName: "Helios Beach Resort",
      startingPrice: 665,
      rating: 4.8,
    },
  ];

  return (
    <section className="four_cards">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="mb-0">Featured Hotels</h2>
          </div>
        </div>

        <div className="card_row">
          {featuredHotelsData.map((hotel) => (
            <FeaturedHotelCard
              key={hotel.id}
              imageSrc={hotel.imageSrc}
              location={hotel.location}
              hotelName={hotel.hotelName}
              startingPrice={hotel.startingPrice}
              rating={hotel.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotelsSection;
