import React, { useState } from "react";
import "../Pages/Checkout.css";

const CheckoutForm = () => {
  const [guest, setGuest] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    id_card: "",
  });

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setGuest({ ...guest, [name]: value });
  };

  return (
    <div>
      <div id="form">
        <h3 id="guest_details">GUEST DETAILS</h3>
        <label className="form_label">Guest Full Name</label>
        <input
          className="form_input"
          type="text"
          placeholder="Name"
          value={guest.name}
          name="name"
          onChange={handleChange}
        />

        <label className="form_label">Guest Age</label>
        <input
          className="form_input"
          type="number"
          placeholder="Age"
          value={guest.age}
          name="age"
          onChange={handleChange}
        />

        <label className="form_label">Comtact Number</label>
        <input
          className="form_input"
          type="tel"
          placeholder="Mobile No."
          value={guest.mobile}
          name="mobile"
          onChange={handleChange}
        />

        <label className="form_label">Email Address</label>
        <input
          className="form_input"
          type="email"
          placeholder="Email"
          value={guest.email}
          name="email"
          onChange={handleChange}
        />

        <label className="form_label">Id card Number</label>
        <input
          type="text"
          className="form_input"
          placeholder="Identification"
          value={guest.id_card}
          name="id_card"
          onChange={handleChange}
        />
      </div>
      <button id="pay_now">PAY NOW</button>
    </div>
  );
};

export default CheckoutForm;
