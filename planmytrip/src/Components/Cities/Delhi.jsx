import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
export const Delhi = () => {
  const [data, setData] = useState([]);
  const getData = (url) => {
    return axios.get(url);
  };
  useEffect(() => {
    getData("https://database-json-server.vercel.app/Delhi").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      {data.map((el) => {
        return (
          <UpperWrapper>
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
                // alignItems: "center",
                // justifyContent: "center",
                backgroundColor: "rgb(245 245 245)",
                padding: "30px",
                borderLeft: "1px solid black",
                float: "right",
                // border: "3px solid green",
              }}
            >
              <p style={{ marginTop: "80px" }}>{`Rs.${el.price}`}</p>
            </div>
          </UpperWrapper>
        );
      })}
    </div>
  );
};
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
  border: 1px solid red;
  width: 60%;
  margin: auto;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;