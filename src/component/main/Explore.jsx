import React from "react";
import NearbyCard from "./NearByCard"; // Adjust the path as needed

const ExploreNearbySection = () => {

    const nearbyData = [
        { id: 1, imageSrc: "https://booking.webestica.com/assets/images/category/hotel/nearby/01.jpg", title: "San Francisco", driveDuration: "13 min drive" },
        { id: 2, imageSrc: "https://booking.webestica.com/assets/images/category/hotel/nearby/02.jpg", title: "Los Angeles", driveDuration: "25 min drive" },
        { id: 3, imageSrc: "https://booking.webestica.com/assets/images/category/hotel/nearby/03.jpg", title: "Miami", driveDuration: "45 min drive" },
        { id: 4, imageSrc: "https://booking.webestica.com/assets/images/category/hotel/nearby/04.jpg", title: "Sanjosh", driveDuration: "55 min drive" },
        { id: 5, imageSrc: "https://booking.webestica.com/assets/images/category/hotel/nearby/05.jpg", title: "New York", driveDuration: "1-hour drive" },
        { id: 6, imageSrc: "https://booking.webestica.com/assets/images/category/hotel/nearby/06.jpg", title: "North Justen", driveDuration: "2-hour drive" },
        { id: 7, imageSrc: "https://booking.webestica.com/assets/images/category/hotel/nearby/07.jpg", title: "Rio", driveDuration: "20 min drive" },
        { id: 8, imageSrc: "https://booking.webestica.com/assets/images/category/hotel/nearby/08.jpg", title: "Las Vegas", driveDuration: "3-hour drive" },
        { id: 9, imageSrc: "https://booking.webestica.com/assets/images/category/hotel/nearby/09.jpg", title: "Texas", driveDuration: "55 min drive" },
        { id: 10, imageSrc: "https://booking.webestica.com/assets/images/category/hotel/nearby/10.jpg", title: "Chicago", driveDuration: "13 min drive" },
        { id: 11, imageSrc: "https://booking.webestica.com/assets/images/category/hotel/nearby/11.jpg", title: "New Keagan", driveDuration: "35 min drive" },
        { id: 12, imageSrc: "https://booking.webestica.com/assets/images/category/hotel/nearby/12.jpg", title: "Oslo", driveDuration: "1 hour 13 min drive" },
      ];

  return (
    <section>
      <div className="container twelve_cards">
        {/* Title */}
        <div className="">
          <div className="">
            <h2 className="section_title">Explore Nearby</h2>
          </div>
        </div>

        <div className="cards_wrapper">
          {nearbyData.map((card) => (
            <NearbyCard
              key={card.id}
              imageSrc={card.imageSrc}
              title={card.title}
              driveDuration={card.driveDuration}
            />
          ))}
        </div> {/* Row END */}
      </div>
    </section>
  );
};

export default ExploreNearbySection;
