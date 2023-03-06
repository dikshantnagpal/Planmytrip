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
            <h3 className="rule_heading">Directions to reach the property</h3>
            <ul>
              <li>
                The property is located at a distance of 3.0 KMs from the Indira
                Gandhi International Airport. Take a taxi from Indira Gandhi
                International Airport and de-board at KELVISH HOTEL. The
                estimated travel fare from the Indira Gandhi International
                Airport to the property is 500.0 INR and total travel time is 10
                minutes.
              </li>
              <li>
                The property is located at a distance of 12.0 KMs from the new
                delhi rly station. Take a taxi from new delhi rly station and
                de-board at KELVISH HOTEL. The estimated travel fare from the
                new delhi rly station to the property is 700.0 INR and total
                travel time is 30 minutes.
              </li>
              <li>
                The property is located at a distance of 0.0 KMs from the
                Maharana Pratap Kashmiri Gate ISBT. Take a bus from Maharana
                Pratap Kashmiri Gate ISBT and de-board at Mahipalpur Main Chowk.
                You can get a bus every 10 minutes. The estimated travel fare
                from the Maharana Pratap Kashmiri Gate ISBT to the property is
                150.0 INR and total travel time is 30 minutes.
              </li>
              <li>
                The property is located at a distance of 2.0 KMs from the Vasant
                Kunj Rd, opp. Vasant Valley School, IAA Colony, Sector C, Vasant
                Kunj, New Delhi, Delhi 110070, India. Take a taxi from Vasant
                Kunj Rd, opp. Vasant Valley School, IAA Colony, Sector C, Vasant
                Kunj, New Delhi, Delhi 110070, India and de-board at Spinal
                Hospital Vasant Kunj. The estimated travel fare from the Vasant
                Kunj Rd, opp. Vasant Valley School, IAA Colony, Sector C, Vasant
                Kunj, New Delhi, Delhi 110070, India to the property is 250.0
                INR and total travel time is 5 minutes.
              </li>
              <li>
                The property is located at a distance of 3.5 KMs from the 2,
                Nelson Mandela Marg, Ambience Island, Vasant Kunj II, Vasant
                Kunj, New Delhi, Delhi 110070, India. Take a taxi from 2, Nelson
                Mandela Marg, Ambience Island, Vasant Kunj II, Vasant Kunj, New
                Delhi, Delhi 110070, India and de-board at Ambience Mall Vasant
                Kunj. The estimated travel fare from the 2, Nelson Mandela Marg,
                Ambience Island, Vasant Kunj II, Vasant Kunj, New Delhi, Delhi
                110070, India to the property is 300.0 INR and total travel time
                is 10 minutes.
              </li>
              <li>
                The property is located at a 400 meters walking distance from
                the Aerocity, Indira Gandhi International Airport, New Delhi,
                Delhi 110037, India with an easy trek. Total travel time is 5
                minutes.
              </li>
              <li>
                The property is located at a 400 meters walking distance from
                the Aerocity, New Delhi, Delhi 110037, India with an easy trek.
                Total travel time is 5 minutes.
              </li>
            </ul>
            <h3 className="rule_heading">Other Rules</h3>
            <ul>
              <li>Allows private parties or events</li>
              <li>Visitors are not allowed</li>
              <li>
                We do allow unmarried/unrelated couples to check-in. This is at
                full discretion of the hotel management. No refund would be
                applicable in case the check-in is denied under such
                circumstances.
              </li>
            </ul>
            <h3 className="rule_heading">child extra bed policy</h3>
            <ul>
              <li>
                An extra bed will be provided to accommodate any child included
                in the booking for a charge mentioned below.
              </li>
              <li>
                INR 300 will be charged for an extra mattress per child. (To be
                paid at the property)
              </li>
            </ul>
            <h3 className="rule_heading">adult extra bed policy</h3>
            <ul>
              <li>
                An extra bed will be provided to accommodate any additional
                guest included in the booking for a charge mentioned below.
              </li>
              <li>
                INR 500 will be charged for an extra mattress per guest. (To be
                paid at the property)
              </li>
            </ul>
            <h3 className="rule_heading">Cancellation Policy</h3>
            <ul>
              <li>
                Cancellation and prepayment policies vary according to room
                type. Please check the Fare policy associatedr room.
              </li>
            </ul>
            <h3 className="rule_heading">Property Policy</h3>
            <ul>
              <li>
                According to government regulations, a valid Photo ID has to be
                carried by every person above the age of 18 staying at Kelvish
                Hotel Near Delhi Airport. The identification proofs accepted are
                Drivers License, Voters Card, Passport, Ration Card. Without
                valid ID the guest will not be allowed to check in.
              </li>
              <li>
                The primary guest checking in to the hotel must be at least 18
                years of age.
              </li>
              <li>
                Early check-in or late check-out is subject to availability and
                may be chargeable by Kelvish Hotel Near Delhi Airport. The
                standard check-in time is 12 PM and the standard check-out time
                is 11 AM. After booking you will be sent an email confirmation
                with hotel phone number. You can contact the hotel directly for
                early check-in or late check-out.
              </li>
              <li>
                The room tariff includes all taxes. The amount paid for the room
                does not include charges for optional services and facilities
                (such as room service, mini bar, snacks or telephone calls).
                These will be charged at the time of check-out from the Hotel.
              </li>
              <li>
                MakeMyTrip will not be responsible for any check-in denied by
                the Hotel due to the aforesaid reason.
              </li>
              <li>
                Kelvish Hotel Near Delhi Airport reserves the right of
                admission. Accommodation can be denied to guests posing as a
                'couple' if suitable proof of identification is not presented at
                check-in.MakeMyTrip will not be responsible for any check-in
                denied by the Hotel due to the aforesaid reason.
              </li>
              <li>
                Kelvish Hotel Near Delhi Airport reserves the right of admission
                for local residents. Accommodation can be denied to guests
                residing in the same city. MakeMyTrip will not be responsible
                for any check-in denied by the Hotel due to the aforesaid
                reason.
              </li>
              <li>
                For any update, User shall pay applicable
                cancellation/modification charges.
              </li>
              <li>
                For any concerns or clarifications related to your booking, you
                can contact the property on 9354440443 and 7065237237.
              </li>
              <li>
                Modified bookings will be subject to availability and revised
                booking policy of the Hotel.
              </li>
              <li>
                The cancellation/modification charges are standard and any
                waiver is on the hotel's discretion.
              </li>
              <li>
                Number of modifications possible on a booking will be on the
                discretion of MakemyTrip.
              </li>
              <li>
                Selective offers of MakeMyTrip will not be valid on a
                cancellation or modification of booking.
              </li>
              <li>
                Any e-coupon discount on the original booking shall be forfeited
                in the event of cancellation or modification.
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
