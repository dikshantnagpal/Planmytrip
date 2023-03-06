import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SinglePage.css";

const hotelDetails = JSON.parse(localStorage.getItem("hotel"));

const SinglePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        spacing={10}
        width={["80%", "100%"]}
        m="auto"
        mt={100}
      >
        <Box>
          <img src={hotelDetails.image} alt="" width={"60%"} />
        </Box>
        <Box>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tQXlDsvRw6v3K74_jk8YW7G4VyQN6iP0Hw&usqp=CAU"
            alt=""
          />
          <h3 padding={"20px"} id="hotel_title">
            {hotelDetails.title}
          </h3>
          <Text className="hotel_text">
            Price <span id="hotel_price"> ₹ {hotelDetails.price}</span>
          </Text>
          <Text className="hotel_text">
            Location <span id="hotel_location">{hotelDetails.location}</span>
          </Text>
          <Text className="hotel_text">
            Rating : <span id="hotel_rating">{hotelDetails.rating}</span>
          </Text>
          <Button id="hotel_button" onClick={() => navigate("/checkout")}>
            Book Online
          </Button>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default SinglePage;
