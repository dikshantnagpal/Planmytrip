import React, { useState, useCallback } from "react";
import "../Pages/Checkout.css";
import useRazorpay from "react-razorpay";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import logo from "../Icon/Plan_my_trip.png";

const Payment = ({ total_ammount }) => {
  const Razorpay = useRazorpay();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = useCallback(async () => {
    const order = {
      //   amount: 500,
      currency: "INR",
      receipt: "qwsaq1",
    };

    const options = {
      key: "rzp_test_qho4K1vu3eyRqY",
      amount: total_ammount * 100 || 1619 * 100,
      currency: "INR",
      name: "Plan Mt Trip",
      description: "Test Transaction",
      image: logo,
      order_id: order.id,
      handler: (res) => {
        swal({
          title: "Payment Successful",
          text: "Your Room has been Booked!",
          icon: "success",
        });
        navigate("/");
      },
      prefill: {
        name: "John Doe",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#0D0D0D",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);
  console.log(success);
  return (
    <div>
      <button onClick={() => handlePayment(total_ammount)}>PAY NOW</button>
    </div>
  );
};

export default Payment;
