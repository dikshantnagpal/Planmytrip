import { Avatar, Box, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import "../App.css";
import logo from "../Icon/Plan_my_trip.png";
import flight from "../Icon/airplane.png";
import hotel from "../Icon/hotels.png";
import house from "../Icon/house.png";
import holiday from "../Icon/holiday.png";
import train from "../Icon/train.png";
import bus from "../Icon/bus.png";
import cab from "../Icon/cab.png";
import forex from "../Icon/forex.png";
import charted from "../Icon/charted.png";
import activity from "../Icon/activities.png";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          height: "60px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          position: "sticky",
          top: "0px",
          left: "0px",
        }}
      >
        <Flex id="navbar" gap={"20px"}>
          <Box
            w={"10%"}
            display="flex"
            justifyContent={"left"}
            alignItems="center"
            cursor={"pointer"}
            onClick={() => navigate("/")}
          >
            <Avatar src={logo} width={"100%"} />
          </Box>
          <Flex w={"60%"} id="nav_category" gap={"8px"}>
            <Box className="nav_box" onClick={() => navigate("/flight")}>
              <Avatar src={flight} className="nav_avatar" />
              <Text className="nav_text">Flights</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/hotel")}>
              <Avatar src={hotel} className="nav_avatar" />
              <Text className="nav_text">Hotels</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/house")}>
              <Avatar src={house} className="nav_avatar" />
              <Text className="nav_text">Homestays</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/holiday")}>
              <Avatar src={holiday} className="nav_avatar" />
              <Text className="nav_text">HolidayPlan</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/train")}>
              <Avatar src={train} className="nav_avatar" />
              <Text className="nav_text">Train</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/bus")}>
              <Avatar src={bus} className="nav_avatar" />
              <Text className="nav_text">Buses</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/cab")}>
              <Avatar src={cab} className="nav_avatar" />
              <Text className="nav_text">Cabs</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/forex")}>
              <Avatar src={forex} className="nav_avatar" />
              <Text className="nav_text">Forex</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/charted")}>
              <Avatar src={charted} className="nav_avatar" />
              <Text className="nav_text">CharterPlane</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/activity")}>
              <Avatar src={activity} className="nav_avatar" />
              <Text className="nav_text">Activities</Text>
            </Box>
          </Flex>
          <Flex w={"30%"} id="nav_filter">
            <Box>
              <Button
                padding={"5px 10px"}
                borderRadius="5px"
                border={"0px"}
                fontSize="17px"
                backgroundColor={"#008cff"}
                color="white"
                onClick={() => navigate("/login")}
                cursor="pointer"
              >
                Login
              </Button>
            </Box>
            <Box>
              <label className="select_label">Country</label>
              <br />
              <select className="select">
                <option value="INDIA">INDIA</option>
                <option value="UAE">UAE</option>
                <option value="USA">USA</option>
              </select>
            </Box>
            <Box>
              <label className="select_label">Language</label>
              <br />
              <select className="select">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Telugu">Telugu</option>
              </select>
            </Box>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Navbar;
