import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faPlane,
  faGlobeAmericas,
  faCar,
  faBell
} from "@fortawesome/free-solid-svg-icons";

function RightNav() {
  return (
    <div className="right">
      <ul>
        <li className="active">
          <FontAwesomeIcon icon={faHotel} />
          Hotel
        </li>
        <li>
          <FontAwesomeIcon icon={faPlane} />
          Flight
        </li>
        <li>
          <FontAwesomeIcon icon={faGlobeAmericas} />
          Tour
        </li>
        <li>
          <FontAwesomeIcon icon={faCar} />
          Cab
        </li>
      </ul>
      <ul className="profile">
        <li className="bell">
          <img
            src="https://icons.iconarchive.com/icons/bootstrap/bootstrap/512/Bootstrap-bell-icon.png"
            alt=""
          />
          <span></span>
          {/* <FontAwesomeIcon icon={faBell} /> */}
        </li>
        <li className="avtar">
          <img
            src="https://booking.webestica.com/assets/images/avatar/01.jpg"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
}

export default RightNav;
