import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../Navbar";
export const Mumbai = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = (url) => {
    return axios.get(url);
  };
  useEffect(() => {
    getData("https://database-json-server.vercel.app/Mumbai").then((res) => {
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
    navigate(`/mumbai/${id}`);
  };

  return (
    <div>
      <Navbar />
      {data.map((el) => {
        return (
          <UpperWrapper
            onClick={() => handleClick(el)}
            style={{ cursor: "pointer" }}
          >
            <Flex key={el.id}>
              <Image>
                <img
                  style={{ borderRadius: "5px" }}
                  src={el.image}
                  alt=""
                  width="90%"
                />
              </Image>

              <DetailsBox>
                <Flex>
                  <p
                    style={{
                      backgroundColor: "green",
                      padding: "5px",
                      borderRadius: "5px",
                      color: "white",
                    }}
                  >{`${el.rating}`}</p>
                  <h3>{el.status}</h3>
                </Flex>
                <h3>{el.title}</h3>
                <div>
                  <i class="fa-sharp fa-solid fa-star-sharp"></i>
                </div>
                <div style={{ diplay: "block" }}>{el.location}</div>
              </DetailsBox>
              {/* <prizeBox> */}
              {/* </prizeBox> */}
            </Flex>
            <div
              style={{
                diplay: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                backgroundColor: "rgb(245 245 245)",
                padding: "30px",
                borderLeft: "1px solid black",
                // float: "right",
                // border: "3px solid green",
              }}
            >
              <p
                style={{
                  marginTop: "80px",
                  fontSize: "25px",
                  fontWeight: "bolder",
                }}
              >{`₹${el.price}`}</p>
            </div>
          </UpperWrapper>
        );
      })}
    </div>
  );
};

// CSS
const Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  gap: 10px;
`;
const Image = styled.div`
  padding-right: 2rem;
  display: flex;
  justify-content: flex-start;
`;
const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
`;
const UpperWrapper = styled.div`
  border: 2px solid grey;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  width: 60%;
  margin: auto;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
