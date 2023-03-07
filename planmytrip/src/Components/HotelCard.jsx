import React from "react";
import { FiZap } from "react-icons/fi";
import "./HotelPage.css";
import { SlLocationPin } from "react-icons/sl";

const HotelCard = ({
  image,
  location,
  price,
  rating,
  status,
  strike,
  title,
  id,
}) => {
  return (
    <div id="hotel_card">
      <div id="hotel_card_image">
        <img src={image} alt="" />
      </div>
      <div id="hotel_card_data">
        <img
          src="https://promos.makemytrip.com/Hotels_product/Value_Stays/v2/logo/ValueStays-3.png"
          alt=""
          width={"30%"}
        />
        <p style={{ padding: "8px 0px" }}>
          <span id="hotel_card_rating">{rating}</span>{" "}
          <span id="hotel_card_status">{status}</span>
        </p>
        <h2 id="hotel_card_title">{title}</h2>
        <p style={{ display: "inline" }}>
          <span>
            <SlLocationPin />
          </span>
          <span id="hotel_card_location">{location}</span>
          {"|"}{" "}
          <span id="hotel_card_location_description">
            Neer to important location in this city
          </span>{" "}
        </p>
        <br />
        <button id="hotel_card_couple_friendly">Couple Friendly</button>
        <p>
          <span id="hotel_card_money_back">
            100% Money Back Guarantee on Clean rooms with TV, AC & Free Wi-Fi
          </span>
        </p>
      </div>
      <div id="hotel_card_price">
        <div>
          <p id="hotel_card_strike">₹{strike}</p>
          <h3 id="hotel_card_discounted_price">₹{price}</h3>
          <p id="hotel_card_per_night">Per Night</p>
          <p id="hotel_card_money_back">
            You can Book room pay letter, EMI Available!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
