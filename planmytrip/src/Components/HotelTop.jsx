import {
  Box,
  ChakraProvider,
  SimpleGrid,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Center,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "./HotelPage.css";

const HotelTop = () => {
  return (
    <div style={{ height: "auto", backgroundColor: "#cfe9fc" }}>
      <ChakraProvider>
        <SimpleGrid columns={[1, 1, 1, 2, 2, 2]} width="90%" margin={"auto"}>
          <Box textAlign={"left"} paddingTop="20px" paddingBottom={"20px"}>
            <Text className="hotelsAndMore">
              Home{" "}
              <spam>
                <ChevronRightIcon />
              </spam>{" "}
              Hotels and more in this city
            </Text>
            <Text id="HotelsVillasApartments">
              Hotels, Villas, Apartments and more in city
            </Text>
            <Text className="hotelsAndMore">
              You can see multiple property in this city
            </Text>
          </Box>
          <Box display={"flex"} justifyContent="center" alignItems={"center"}>
            <Flex gap={2}>
              <img
                src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/sprite/view-map-new.png"
                alt=""
                width={"25%"}
              />
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children=<SearchIcon />
                />
                <Input
                  placeholder="Search Hotel or Property"
                  width="auto"
                  background={"white"}
                  zIndex="4"
                />
              </InputGroup>
            </Flex>
          </Box>
        </SimpleGrid>
      </ChakraProvider>
    </div>
  );
};

export default HotelTop;
