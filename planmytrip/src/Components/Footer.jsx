import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link, spam, useNavigate } from "react-router-dom";
import "../App.css";
import facebook from "../Icon/facebook.png";
import twitter from "../Icon/twitter.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box style={{ backgroundColor: "#f3f1f1",marginTop:"70px" }}>
        <Box id="footer_top">
          <Box>
            <Text className="footer_top_category">PRODUCT OFFERING</Text>
            <Text onClick={() => navigate("/")}>
              <spam>Flight</spam>, <spam>International Flight</spam>,
              <spam>Charte Flight</spam>, <spam>Hotels</spam>,
              <spam>International Hotels</spam>,{" "}
              <spam>Homestays and villas</spam>,<spam>holiday in india</spam>,{" "}
              <spam>International holiday</spam>,
              <spam>Book hotel from UAE</spam>,
              <spam>myBiz for Corporate Travel</spam>,
              <spam>Book Online Cabs</spam>, <spam>Book Bus Tickets</spam>,
              <spam>Book Train Tickets</spam>, <spam>Book Fights from US</spam>,
              <spam>Trip Planner</spam>, <spam>One Way Cab</spam>,
              <spam>Gift Card</spam>
            </Text>
          </Box>
          <Box>
            <Text className="footer_top_category">MAKEMYTRIP</Text>
            <Text onClick={() => navigate("/")}>
              <spam>About Us</spam>, <spam>Investor Relation</spam>,
              <spam>Career</spam>, <spam>MMT Foundation</spam>,
              <spam>CSR Policy</spam>,{" "}
              <spam>myPartner-Travel Agent Portal</spam>,
              <spam>Foreign Exchange</spam>, <spam>List your hotel</spam>,
              <spam>Partners-Reabus</spam>, <spam>Partner-Goibibo</spam>,
              <spam>Advertize with Us</spam>
            </Text>
          </Box>
          <Box>
            <Text className="footer_top_category">ABOUT THE SITE</Text>
            <Text onClick={() => navigate("/")}>
              <spam>Customer Support</spam>, <spam>Payment Security</spam>,
              <spam>Privicy Policy</spam>, <spam>User Agreement</spam>,
              <spam>Terms of Service</spam>, <spam>More Offices</spam>,
              <spam>Make A Payment</spam>, <spam>Work From Home</spam>
            </Text>
          </Box>
          <Box>
            <Text className="footer_top_category">TOP HOTELS IN INDIA</Text>
            <Text onClick={() => navigate("/")}>
              <spam>Hotal Taj Mumbai</spam>, <spam>Hotel Oborai Mumbai</spam>
              <spam>W Goa</spam>, <spam>Grand Hayat Goa</spam>,
              <spam>The Westion Goa</spam>, <spam>Hotal Taj Mumbai</spam>,
              <spam>Hotel Oborai Mumbai</spam>, <spam>W Goa</spam>,{" "}
              <spam>Grand Hayat Goa</spam>, <spam>The Westion Goa</spam>,{" "}
              <spam>Hotal Taj Mumbai</spam>,<spam>Hotel Oborai Mumbai</spam>,
              <spam>W Goa</spam>, <spam>Grand Hayat Goa</spam>,
              <spam>The Westion Goa</spam>, <spam>Hotal Taj Mumbai</spam>,
              <spam>Hotel Oborai Mumbai</spam>, <spam>W Goa</spam>,{" "}
              <spam>Grand Hayat Goa</spam>, <spam>The Westion Goa</spam>,{" "}
              <spam>Hotal Taj Mumbai</spam>, <spam>Hotel Oborai Mumbai</spam>,
              <spam>W Goa</spam>, <spam>Grand Hayat Goa</spam>,
              <spam>The Westion Goa</spam>
            </Text>
          </Box>
          <Box>
            <Text className="footer_top_category">TOP INTERNATIONAL HOTEL</Text>
            <Text onClick={() => navigate("/")}>
              <spam>Adaaran Club Rannalhi</spam>, <spam>Burk Khalifa</spam>,
              <spam>Trum International</spam>, <spam>Caesars Palace</spam>,
              <spam>Taj Samudra Colombo</spam>,{" "}
              <spam>Adaaran Club Rannalhi</spam>,<spam>Burk Khalifa</spam>,{" "}
              <spam>Trum International</spam>,<spam>Caesars Palace</spam>,{" "}
              <spam>Taj Samudra Colombo</spam>,
              <spam>Adaaran Club Rannalhi</spam>, <spam>Burk Khalifa</spam>,
              <spam>Trum International</spam>, <spam>Caesars Palace</spam>,
              <spam>Taj Samudra Colombo</spam>,{" "}
              <spam>Adaaran Club Rannalhi</spam>,<spam>Burk Khalifa</spam>,{" "}
              <spam>Trum International</spam>,<spam>Caesars Palace</spam>,{" "}
              <spam>Taj Samudra Colombo</spam>,
              <spam>Adaaran Club Rannalhi</spam>, <spam>Burk Khalifa</spam>,
              <spam>Trum International</spam>, <spam>Caesars Palace</spam>,
              <spam>Taj Samudra Colombo</spam>
            </Text>
          </Box>
          <Box>
            <Text className="footer_top_category">QUICK LINKS</Text>
            <Text onClick={() => navigate("/")}>
              <spam>Customer Support</spam>, <spam>Payment Security</spam>,
              <spam>Privicy Policy</spam>, <spam>User Agreement</spam>,
              <spam>Terms of Service</spam>, <spam>More Offices</spam>,
              <spam>Make A Payment</spam>, <spam>Work From Home</spam>
            </Text>
          </Box>
          <Box>
            <Text className="footer_top_category">IMPORTANT LINKS</Text>
            <Text onClick={() => navigate("/")}>
              <spam>Flight</spam>, <spam>International Flight</spam>,
              <spam>Charte Flight</spam>, <spam>Hotels</spam>,
              <spam>International Hotels</spam>,{" "}
              <spam>Homestays and villas</spam>,<spam>holiday in india</spam>,{" "}
              <spam>International holiday</spam>,
              <spam>Book hotel from UAE</spam>,
              <spam>myBiz for Corporate Travel</spam>,
              <spam>Book Online Cabs</spam>, <spam>Book Bus Tickets</spam>,
              <spam>Book Train Tickets</spam>, <spam>Book Fights from US</spam>,
              <spam>Trip Planner</spam>, <spam>One Way Cab</spam>,
              <spam>Gift Card</spam>
            </Text>
          </Box>
          <Box>
            <Text className="footer_top_category">CORPORATE TRAVEL</Text>
            <Text onClick={() => navigate("/")}>
              <spam>About Us</spam>, <spam>Investor Relation</spam>,
              <spam>Career</spam>, <spam>MMT Foundation</spam>,
              <spam>CSR Policy</spam>,{" "}
              <spam>myPartner-Travel Agent Portal</spam>,
              <spam>Foreign Exchange</spam>, <spam>List your hotel</spam>,
              <spam>Partners-Reabus</spam>, <spam>Partner-Goibibo</spam>,
              <spam>Advertize with Us</spam>
            </Text>
          </Box>
        </Box>
      </Box>
      <Box backgroundColor={"#dddbdb"}>
        <Box id="footer_mid">
          <Box w={"32%"} className="footer_mid_box">
            <Text className="footer_about_me">Why PlanMyTrip?</Text>
            <Text className="footer_description">
              Established in 2000, PlanMyTrip has since positioned itself as one
              of the leading companies, providing great offers, competitive
              airfares, exclusive discounts, and a seamless online booking
              experience to many of its customers. The experience of booking
              your flight tickets, hotel stay, and holiday package through our
              desktop site or mobile app can be done with complete ease and no
              hassles at all. We also deliver amazing offers, such as Instant
              Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many
              more while updating them from time to time to better suit our
              customers’ evolving needs and demands.
            </Text>
          </Box>
          <Box w={"32%"} className="footer_mid_box">
            <Text className="footer_about_me">
              Booking Flights with MakeMyTrip
            </Text>
            <Text className="footer_description">
              At MakeMyTrip, you can find the best of deals and cheap air
              tickets to any place you want by booking your tickets on our
              website or app. Being India’s leading website for hotel, flight,
              and holiday bookings, MakeMyTrip helps you book flight tickets
              that are affordable and customized to your convenience. With
              customer satisfaction being our ultimate goal, we also have a 24/7
              dedicated helpline to cater to our customer’s queries and
              concerns. Serving over 5 million happy customers, we at MakeMyTrip
              are glad to fulfill the dreams of folks who need a quick and easy
              means to find air tickets. You can get a hold of the cheapest
              flight of your choice today while also enjoying the other
              available options for your travel needs with us.
            </Text>
          </Box>
          <Box w={"32%"} className="footer_mid_box">
            <Text className="footer_about_me">
              Domestic Flights with MakeMyTrip
            </Text>
            <Text className="footer_description">
              MakeMyTrip is India's leading player for flight bookings. With the
              cheapest fare guarantee, experience great value at the lowest
              price. Instant notifications ensure current flight status, instant
              fare drops, amazing discounts, instant refunds and rebook options,
              price comparisons and many more interesting features.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box background={"black"}>
        <Box id="footer_bottom">
          <Flex gap={"20px"}>
            <Link to={"https://twitter.com/makemytrip/"}>
              <Image src={twitter} backgroundColor="white" borderRadius="50%" />
            </Link>
            <Link to={"https://www.facebook.com/makemytrip/"}>
              <Image
                src={facebook}
                backgroundColor="white"
                borderRadius="50%"
              />
            </Link>
          </Flex>
          <Box>
            <Text fontWeight={600} color="white">
              @ 2023 PLANMYTRIP PVT.LTD <spam>country</spam> INDIA USA UAE
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
