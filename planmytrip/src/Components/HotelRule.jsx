import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import ".././Pages/Checkout.css";

function HotelRule() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Read all Hotel Rules</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        backgroundColor="white"
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent padding={"0px 40px"}>
          <ModalHeader>All Hotel Rules</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h3 className="rule_heading">Must read</h3>
            <ul>
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
              <li>Pets are not allowed.</li>
              <li>Smoking within the premises is not allowed</li>
              <li>Allows private parties or events</li>
              <li>
                Quarantine protocols are being followed as per local government
                authorities
              </li>
            </ul>
            <h3 className="rule_heading">Safety and Hygiene</h3>
            <ul>
              <li>
                Quarantine protocols are being followed as per local government
                authorities
              </li>
              <li>Guests from containment zones are allowed</li>
              <li>Shared resources in common areas are properly sanitized</li>
              <li>Property staff is trained on hygiene guidelines</li>
              <li>Guests with fever are not allowed</li>
              <li>
                Only those guests with safe status on Aarogya Setu app are
                allowed
              </li>
              <li>
                Hand sanitizer is provided in guest accommodation and common
                areas
              </li>
              <li>Thermal screening is done at entry and exit points</li>
            </ul>
            <h3 className="rule_heading">Guest Profile</h3>
            <ul>
              <li>Unmarried couples allowed</li>
              <li>Bachelors allowed</li>
              <li>Guests below 18 years of age are allowed</li>
              <li>Suitable for children</li>
            </ul>
            <h3 className="rule_heading">Room Safety and Hygiene</h3>
            <ul>
              <li>
                All rooms are disinfected using bleach or other disinfectant
              </li>
              <li>
                Linens, towels, and laundry are washed as per local guidelines
              </li>
              <li>Rooms are properly sanitized between stays</li>
              <li>Hand sanitizers are not available in the rooms</li>
            </ul>
            <h3 className="rule_heading">Payment Related</h3>
            <ul>
              <li>Credit/debit cards are accepted</li>
              <li>Master Card, American Express and Visa cards are accepted</li>
            </ul>
            <h3 className="rule_heading">Food Arrangement</h3>
            <ul>
              <li>Non veg food is allowed</li>
              <li>Outside food is allowed</li>
              <li>Food Delivery is not available</li>
            </ul>
            <h3 className="rule_heading">Food and Drinks Hygiene</h3>
            <ul>
              <li>
                COVID-19 guidelines for Food Hygiene is followed as per
                government guidelines
              </li>
              <li>Social distancing is followed in restaurants</li>
              <li>
                Serveware and supplies are sanitized before they are brought to
                the kitchen
              </li>
              <li>Masks and hairnets are mandatory for staff in restaurants</li>
            </ul>
            <h3 className="rule_heading">Smoking/Alcohol consumption Rules</h3>
            <ul>
              <li>Smoking within the premises is not allowed</li>
              <li>There are no restrictions on alcohol consumption.</li>
            </ul>
            <h3 className="rule_heading">Property Accessibility</h3>
            <ul>
              <li>The property is Elderly-friendly/Disabled-friendly</li>
              <li>Bed height is accessible</li>
              <li>The entire unit is wheelchair accessible</li>
              <li>The property has a wide entryway</li>
            </ul>
            <h3 className="rule_heading">ID Proof Related</h3>
            <ul>
              <li>
                Passport, Aadhar, Driving License and Govt. ID are accepted as
                ID proof(s)
              </li>
              <li>
                PAN Card, Office ID and Non-Govt IDs are not accepted as ID
                proof(s)
              </li>
              <li>Local ids are allowed</li>
            </ul>
            <h3 className="rule_heading">Cancellation Policy</h3>
            <ul>
              <li>
                Cancellation and prepayment policies vary according to room
                type. Please check the Fare policy associatedr room.
              </li>
            </ul>
            <h3 className="rule_heading">Payment Mode</h3>
            <ul>
              <li>
                You can pay now or you can pay at the hotel if your selected
                room type has this option
              </li>
            </ul>
            <h3 className="rule_heading">Check In/out</h3>
            <ul>
              <li>Hotel Check-in Time is 2 PM, Check-out Time is 12 PM.</li>
            </ul>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default HotelRule;
