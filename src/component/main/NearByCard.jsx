import React from "react";

const NearbyCard = ({ imageSrc, title, driveDuration }) => {
  return (
    <div className="card_container">
      <img src={imageSrc} className="rounded-circle" alt="" />
      <div className="">
        <h5 className="card_title">
          <a href="#" className="stretched_link">
            {title}
          </a>
        </h5>
        <span>{driveDuration}</span>
      </div>
    </div>
  );
};

export default NearbyCard;
