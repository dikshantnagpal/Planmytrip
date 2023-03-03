import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Delhi = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getData = (url) => {
    return axios.get(url);
  };
  useEffect(() => {
    getData("https://database-json-server.vercel.app/delhi").then((res) => {
      setData(res.data);
      // console.log(res.data);
    });
  }, []);

  const handleClick = ({ image, title, location, price, rating, id }) => {
    let hotelDetails = {
      image,
      title,
      location,
      price,
      rating,
    };
    localStorage.setItem("hotel", JSON.stringify(hotelDetails));
    navigate(`${id}`);
  };

  return (
    <div>
      {data.map((el) => {
        return (
          //   <Flex>
          <Flex key={el.id}>
            <Image>
              <img src={el.image} alt="" width="300px" />
            </Image>
            <h3>{el.title}</h3>
            <div style={{ diplay: "block" }}>{el.location}</div>
            <h4>{`Rs.${el.price}`}</h4>
            <h3>{`Rating ${el.rating}`}</h3>
            <h3>{el.status}</h3>
            <button onClick={() => handleClick(el)}>Book Hotel</button>
          </Flex>
          //   </Flex>
        );
      })}
    </div>
  );
};
const Flex = styled.div`
  display: flex;
  border: 1px solid grey;
  /* justify-content: center; */
  align-items: center;
  justify-content: space-around;
  padding: 10px;
`;
const Image = styled.div`
  padding-right: 120px;
`;
