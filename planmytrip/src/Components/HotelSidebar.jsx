import { Select } from "@chakra-ui/react";
import React, { useEffect,useState } from "react";
import axios from "axios"
import "./HotelPage.css";
import { Mumbai } from "./Cities/Mumbai";

export const HotelSidebar = ({onChange}) => {
 

// console.log(sort)






  return (
    <div id="hotel_sidebar">
      <h2 id="sidebar_select_filter">Select Filters</h2>
      <div>
        <div style={{ textAlign: "left", margin: "10px 0px" }}>
          <label className="sidebar_label">Sort By : </label>
        </div>
        <select id="sidebar_sort" onChange={onChange}>
          <option>Price</option>
          <option value="asc">Price - Low to High</option>
          <option value="desc">Price - High to Low</option>
        </select>
      </div>
      <div style={{ textAlign: "left" }}>
        <div style={{ textAlign: "left", margin: "10px 0px" }}>
          <label className="sidebar_label">Price per night</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">₹ 0 - ₹ 1000</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">₹ 1000 - ₹ 2500</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">₹ 2500 - ₹ 5000</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">₹ 5000 - ₹ 8000</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">₹ 8000 - ₹ 12000</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">₹ 12000 - ₹ 20000</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">₹ 20000 - ₹3 0000</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">₹ 30000 +</label>
        </div>
      </div>
      <div style={{ textAlign: "left" }}>
        <div style={{ textAlign: "left", margin: "10px 0px" }}>
          <label className="sidebar_label">Suggested For You</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">5 Star Properties</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">
            Unmarried Couples Allowed
          </label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">Breakfast Included</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">Free Cancellation</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">
            New Delhi Railway Station, Delhi
          </label>
        </div>
      </div>
      <div style={{ textAlign: "left" }}>
        <div style={{ textAlign: "left", margin: "10px 0px" }}>
          <label className="sidebar_label">Star Category</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">5 Star</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">4 Star</label>
        </div>
        <div className="price_filter_div">
          <input type="checkbox" className="price_filter_checkbox" />
          <label className="price_filter_label">3 Star</label>
        </div>
      </div>
    </div>
  );
};

export default HotelSidebar;
