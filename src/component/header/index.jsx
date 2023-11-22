import React, { useState } from "react";
import Navlisting from "./Navlisting";
import RightNav from "./RightNav";

function Index() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <header>
      <nav>
        <div className="left">
          <div className="logo">
            <img
              src="https://booking.webestica.com/assets/images/logo.svg"
              alt=""
            />
          </div>
          <ul className="drop_down">
            <li
              onMouseEnter={() => handleMouseEnter("Listing")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">Listing</a>
              {hoveredItem === "Listing" && (
                <div className="listing_wrapper" onMouseEnter={() => handleMouseEnter("Listing")}>
                  <Navlisting />
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("Pages")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">Pages</a>
              {hoveredItem === "Pages" && (
                <div className="listing_wrapper" onMouseEnter={() => handleMouseEnter("Pages")}>
                  <Navlisting />
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("Accounts")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">Accounts</a>
              {hoveredItem === "Accounts" && (
                <div className="listing_wrapper" onMouseEnter={() => handleMouseEnter("Accounts")}>
                  <Navlisting />
                </div>
              )}
            </li>

            <li
              className="three_dots_wrapper"
              onMouseEnter={() => handleMouseEnter("ThreeDots")}
              onMouseLeave={handleMouseLeave}
            >
              <span className="three_dot"></span>
              <span className="three_dot"></span>
              <span className="three_dot"></span>
              {hoveredItem === "ThreeDots" && (
                <div className="listing_wrapper" onMouseEnter={() => handleMouseEnter("ThreeDots")}>
                  <Navlisting />
                </div>
              )}
            </li>
          </ul>
        </div>
        <RightNav />
        <div className="bottom">

        </div>
      </nav>
    </header>
  );
}

export default Index;
