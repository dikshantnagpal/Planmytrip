import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import HotelTop from "../HotelTop";
import HotelSidebar from "../HotelSidebar";
import HotelCard from "../HotelCard";
import "../HotelPage.css";

export const Delhi = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const getData = (url) => {
    return axios.get(url);
  };

  const handlePaggination = (no) => {
    setPage((prev) => prev + no);
  };

  let limit = 5;
  useEffect(() => {
    getData(
      `https://database-json-server.vercel.app/Delhi?_page=${page}&_limit=${limit}`
    ).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const handleClick = ({
    image,
    rating,
    status,
    title,
    location,
    price,
    id,
  }) => {
    const hotelDetail = {
      image,
      rating,
      status,
      title,
      location,
      price,
      id,
    };
    localStorage.setItem("hotel", JSON.stringify(hotelDetail));
    navigate(`/delhi/${id}`);
    window.location.reload();
  };

  return (
    <div style={{ marginTop: "60px" }}>
      <Navbar />
      <HotelTop />
      <div id="hotel_mid">
        <HotelSidebar />
        <div id="hotel_data">
          {data.length > 0 &&
            data.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item)}
                style={{ cursor: "pointer" }}
              >
                <HotelCard {...item} />
              </div>
            ))}
        </div>
      </div>
      <div>
        <button
          disabled={page === 1}
          className="paggination"
          onClick={() => handlePaggination(-1)}
        >
          - Prev
        </button>
        <button id="page_no">{page}</button>
        <button className="paggination" onClick={() => handlePaggination(1)}>
          Next +
        </button>
      </div>
    </div>
  );
};
