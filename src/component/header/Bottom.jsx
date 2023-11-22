import React, { useState } from "react";
import { AutoComplete, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import HotelRooms from "./HotelRooms";
import { DatePicker } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { SearchOutlined } from "@ant-design/icons";

dayjs.extend(customParseFormat);

const dateFormat = "MM/DD";

const App = () => {
  const locationOptions = [
    {
      value: "Burns Bay Road",
    },
    {
      value: "Downing Street",
    },
    {
      value: "Wall Street",
    },
  ];

  return (
    <div className="bottom_container">
      <FontAwesomeIcon className="svg" icon={faLocationDot} />
      <div className="input-group">
        <label className="input-label cust_label">Location</label>
        <AutoComplete
          options={locationOptions.map((option) => ({
            value: option.value,
          }))}
          placeholder="Select location"
          style={{ width: 200 }}
        />
      </div>
      <FontAwesomeIcon className="svg" icon={faCalendar} />
      <div className="input-group">
        <label className="input-label cust_label">Check in - out</label>
        <Space direction="vertical" size={12}>
          <DatePicker.RangePicker
            defaultValue={[dayjs(), dayjs().add(7, "days")]}
            format={dateFormat}
          />
        </Space>
      </div>
      <FontAwesomeIcon className="svg" icon={faUser} />
      <div className="input-group">
        <label className="input-label cust_label">Guests & Rooms</label>
        <HotelRooms />
      </div>

      <div className="seach_btn_wrapper">
        <SearchOutlined />
      </div>
    </div>
  );
};

export default App;
