import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
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
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();
  const [responsiveMenu, setResponsiveMenu] = useState(false);
  return (
    <div>
      <div
        style={{
          height: "60px",
          backgroundColor: "white",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          position: "fixed",
          top: "0px",
          left: "0px",
        }}
        id="nav_div"
      >
        <Box id="navbar" gap={"20px"}>
          <Box
            id="nav_logo"
            w={"10%"}
            display="flex"
            justifyContent={"left"}
            alignItems="center"
            cursor={"pointer"}
            onClick={() => navigate("/")}
          >
            <Avatar src={logo} width={"100%"} />
          </Box>
          <Box id="hamburger">
            <a href="#" onClick={() => setResponsiveMenu((prev) => !prev)}>
              <GiHamburgerMenu />
            </a>
          </Box>
          <Box
            w={"60%"}
            id={responsiveMenu ? "tablet_nav_category" : "nav_category"}
            gap={"8px"}
          >
            <Box id="nav_home" onClick={() => navigate("/")}>
              <Text>Home</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/")}>
              <Avatar src={flight} className="nav_avatar" />
              <Text className="nav_text" marginTop={10} >Flights</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/")}>
              <Avatar src={hotel} className="nav_avatar" />
              <Text className="nav_text" marginTop={10} >Hotels</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/house")}>
              <Avatar src={house} className="nav_avatar" />
              <Text className="nav_text" marginTop={10} >Homestays</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/holiday")}>
              <Avatar src={holiday} className="nav_avatar" />
              <Text className="nav_text" marginTop={10} >HolidayPlan</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/train")}>
              <Avatar src={train} className="nav_avatar" />
              <Text className="nav_text" marginTop={14} >Train</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/bus")}>
              <Avatar src={bus} className="nav_avatar" />
              <Text className="nav_text" marginTop={13} >Buses</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/cab")}>
              <Avatar src={cab} className="nav_avatar" />
              <Text className="nav_text" marginTop={13} >Cabs</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/forex")}>
              <Avatar src={forex} className="nav_avatar" />
              <Text className="nav_text" marginTop={13} >Forex</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/charted")}>
              <Avatar src={charted} className="nav_avatar" />
              <Text className="nav_text" marginTop={10} >CharterPlane</Text>
            </Box>
            <Box className="nav_box" onClick={() => navigate("/activity")}>
              <Avatar src={activity} className="nav_avatar" />
              <Text className="nav_text" marginTop={14} >Activities</Text>
            </Box>
          </Box>
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
        </Box>
      </div>
    </div>
  );
};

export default Navbar;
