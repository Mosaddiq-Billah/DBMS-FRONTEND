import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const OrderNowForm = ({ itemTitle, price}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [zipcodeError, setZipcodeError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneError("");
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    setAddressError("");
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setCityError("");
  };

  const handleZipcodeChange = (e) => {
    setZipcode(e.target.value);
    setZipcodeError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!name) {
      setNameError("Please enter your name");
      hasError = true;
    }

    if (!email) {
      setEmailError("Please enter your email");
      hasError = true;
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }

    if (!phone) {
      setPhoneError("Please enter your phone number");
      hasError = true;
    }

    if (!address) {
      setAddressError("Please enter your address");
      hasError = true;
    }

    if (!city) {
      setCityError("Please enter your city");
      hasError = true;
    }

    if (!zipcode) {
      setZipcodeError("Please enter your zipcode");
      hasError = true;
    }

    if (!hasError) {
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setCity("");
      setZipcode("");
      console.log(name);
      console.log(email);
      console.log(phone);
      console.log(address);
      console.log(city);
  
      fetch("http://localhost:5000/orders", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          city,
          zipcode,
          itemTitle,
          price
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "Order sent");
         
        })
        .catch((error) => {
          console.log("Error sending order:", error);
        });
    }

  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} className="card w-50 p-4 ">
        <h2 style={{ textAlign: "center" }}>Order Form</h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <p className="error text-danger">{nameError}</p>}
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p className="error text-danger">{emailError}</p>}
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            value={phone}
            onChange={handlePhoneChange}
          />
          {phoneError && <p className="error text-danger">{phoneError}</p>}
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            value={address}
            onChange={handleAddressChange}
          />
          {addressError && <p className="error text-danger">{addressError}</p>}
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            value={city}
            onChange={handleCityChange}
          />
          {cityError && <p className="error text-danger">{cityError}</p>}
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Zipcode"
            value={zipcode}
            onChange={handleZipcodeChange}
          />
          {zipcodeError && <p className="error text-danger">{zipcodeError}</p>}
        </div>

        <div className="mb-3 text-center">
          <NavLink to = "/thankyou"><button type="submit" className="btn btn-primary"> 
            Place Order
          </button></NavLink>
        </div>
      </form>
    </div>
  );
};

export default OrderNowForm;



