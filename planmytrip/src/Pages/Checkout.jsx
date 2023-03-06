import { SimpleGrid, Box, Flex, Text } from "@chakra-ui/react";
import React, { useState, useCallback } from "react";
import "./Checkout.css";
import { StarIcon } from "@chakra-ui/icons";
import HotelRule from "../Components/HotelRule";
import { ChakraProvider } from "@chakra-ui/react";
import CheckoutForm from "../Components/CheckoutForm";
import Payment from "./Payment";
import useRazorpay from "react-razorpay";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import logo from "../Icon/Plan_my_trip.png";

const hotelDetails = JSON.parse(localStorage.getItem("hotel")) || [];

let tax = 0.1 * Number(hotelDetails.price);

let total_ammount = Number(hotelDetails.price) + tax;

const Checkout = () => {
  // const Razorpay = useRazorpay();
  // const [success, setSuccess] = useState(false);
  // const navigate = useNavigate();

  // const handlePayment = useCallback(async () => {
  //   const order = {
  //     currency: "INR",
  //     receipt: "qwsaq1",
  //   };

  //   const options = {
  //     key: "rzp_test_qho4K1vu3eyRqY",
  //     amount: total_ammount * 100 || 1619 * 100,
  //     currency: "INR",
  //     name: "Plan Mt Trip",
  //     description: "Test Transaction",
  //     image: logo,
  //     order_id: order.id,
  //     handler: (res) => {
  //       swal({
  //         title: "Payment Successful",
  //         text: "Your Room has been Booked!",
  //         icon: "success",
  //       });
  //       navigate("/");
  //     },
  //     prefill: {
  //       name: "John Doe",
  //       email: "youremail@example.com",
  //       contact: "9999999999",
  //     },
  //     notes: {
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#0D0D0D",
  //     },
  //   };

  //   const rzpay = new Razorpay(options);
  //   rzpay.open();
  // }, [Razorpay]);

  return (
    <>
      <SimpleGrid
        minChildWidth="360px"
        spacing="40px"
        width={"80%"}
        margin="auto"
        mt={100}
        justifyContent="space-between"
      >
        <Box>
          <h1 className="hotel_review">Review your Booking</h1>
          <h3 className="hotel_information">HOTEL INFORMATION</h3>
          <hr />
          <Flex justifyContent={"space-between"} mt="20">
            <Box>
              <button style={{ color: "blue" }}>Couple Friendly</button>
              <Flex justifyContent={"space-between"} mt="20">
                {hotelDetails.title}{" "}
                <button
                  id="checkout_page_rating"
                  style={{ margin: "0px 10px" }}
                >
                  {hotelDetails.rating}
                </button>{" "}
                <StarIcon fontSize={"20px"} />
              </Flex>
            </Box>
            <Box>
              <img src={hotelDetails.image} alt="" width={"50%"} />
            </Box>
          </Flex>
          <Box borderBottom={"1px solid brown"} padding="10px" marginTop={20}>
            <h3 style={{ backgroundColor: "#FF7F50", color: "white" }}>
              Important Information
            </h3>
            <Box>
              <h4>Hotel Rules</h4>
              <ul style={{ textAlign: "left" }}>
                <li>Guests with fever are not allowed</li>
                <li>
                  PAN Card, Office ID and Non-Govt IDs are not accepted as ID
                  proof(s)
                </li>
                <li>
                  Passport, Aadhar, Driving License and Govt. ID are accepted as
                  ID proof(s)
                </li>
                <li>Property staff is trained on hygiene guidelines</li>
              </ul>
              <ChakraProvider>
                <HotelRule />
              </ChakraProvider>
            </Box>
          </Box>
          <CheckoutForm total_ammount={total_ammount} />
        </Box>
        <Box>
          <h1 className="hotel_review">Price</h1>
          <h3 className="hotel_information">PRICE BREAK-UP</h3>
          <hr />
          <Box
            width={"80%"}
            m="auto"
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <Flex justifyContent={"space-around"}>
              <Text className="price_text">1 Room x 1 Night</Text>
              <Text className="hotel_price">₹ {hotelDetails.price}</Text>
            </Flex>
            <Flex justifyContent={"space-around"}>
              <Text className="price_text">Hotel Taxes</Text>
              <Text className="hotel_price">₹ {Math.floor(tax)}</Text>
            </Flex>
            <hr />
            <Flex justifyContent={"space-around"} padding="10px">
              <Text id="total_price_text">Total Amount to be paid</Text>
              <Text id="total_price">₹ {Math.floor(total_ammount)}</Text>
            </Flex>
          </Box>
        </Box>
      </SimpleGrid>
      <button id="pay_now">
        <Payment total_ammount={total_ammount} />
      </button>
    </>
  );
};

export default Checkout;
