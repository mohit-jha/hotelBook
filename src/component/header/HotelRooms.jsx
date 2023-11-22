import React, { useState, useEffect, useRef } from "react";
import { Input, button, Space, Dropdown } from "antd";
import {
  faUser,
  faMinusCircle,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GuestAndRoomInput = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [totalGuests, setTotalGuests] = useState(adults + children);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setTotalGuests(adults + children);
  }, [adults, children]);

  const increment = (type) => {
    switch (type) {
      case "adults":
        setAdults((prevCount) => prevCount + 1);
        break;
      case "children":
        setChildren((prevCount) => prevCount + 1);
        break;
      case "rooms":
        setRooms((prevCount) => Math.min(prevCount + 1, 8)); // Limit to a maximum of 8 rooms
        break;
      default:
        break;
    }
  };

  const decrement = (type) => {
    switch (type) {
      case "adults":
        if (adults > 0) {
          setAdults((prevCount) => prevCount - 1);
        }
        break;
      case "children":
        if (children > 0) {
          setChildren((prevCount) => prevCount - 1);
        }
        break;
      case "rooms":
        if (rooms > 1) {
          setRooms((prevCount) => prevCount - 1);
        }
        break;
      default:
        break;
    }
  };

  const handleInputClick = () => {
    setShowOptions(!showOptions);
  };

  const componentRef = useRef(null);

  const handleClickOutside = (event) => {
    try {
      const inputNode = document.getElementById("blue_border");
      const dropdownNode = document.querySelector(".ant-dropdown");

      if (
        componentRef.current &&
        !componentRef.current.contains(event.target) &&
        !inputNode.contains(event.target) &&
        !dropdownNode.contains(event.target)
      ) {
        setShowOptions(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const menu = (
    <ul>
      <li>
        <span>Adults</span>
        <div className="btn_wrapper_id">
          <button onClick={() => decrement("adults")}>
            <FontAwesomeIcon icon={faMinusCircle} />-
          </button>
          <span>{adults}</span>
          <button onClick={() => increment("adults")}>
            <FontAwesomeIcon icon={faCirclePlus} />+
          </button>
        </div>
      </li>
      <li>
        <span>Children</span>
        <div className="btn_wrapper_id">
          <button onClick={() => decrement("children")}>
            <FontAwesomeIcon icon={faMinusCircle} />-
          </button>
          <span>{children}</span>
          <button onClick={() => increment("children")}>
            <FontAwesomeIcon icon={faCirclePlus} />+
          </button>
        </div>
      </li>
      <li>
        <span>Rooms</span>
        <div className="btn_wrapper_id">
          <button onClick={() => decrement("rooms")}>
            <FontAwesomeIcon icon={faMinusCircle} />-
          </button>
          <span>{rooms}</span>
          <button onClick={() => increment("rooms")}>
            <FontAwesomeIcon icon={faCirclePlus} />+
          </button>
        </div>
      </li>
    </ul>
  );

  return (
    <Space className="rooms" direction="vertical" ref={componentRef}>
      <div className="rooms_container">
        {/* <FontAwesomeIcon className="svg" icon={faUser} /> */}
        <Dropdown overlay={menu} trigger={["click"]} visible={showOptions}>
          <div className="icon_input_wrapper">
            <Input
              placeholder={`${totalGuests} ${
                totalGuests > 1 ? "Guests" : "Guest"
              } ${rooms} Rooms `}
              readOnly
              id={showOptions ? "blue_border" : "normal_border"}
              onClick={handleInputClick}
            />
          </div>
        </Dropdown>
      </div>
    </Space>
  );
};

export default GuestAndRoomInput;
