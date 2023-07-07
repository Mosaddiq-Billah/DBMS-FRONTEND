import React, { useState } from 'react';
import { Redirect, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const SignupForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!name) {
      setNameError("Please enter your name");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Please enter your password");
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      hasError = true;
    }

    if (!email) {
      setEmailError("Please enter your email");
      hasError = true;
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }

    if (!hasError) {
      setName("");
      setPassword("");
      setEmail("");
      console.log(name);
      console.log(password);
      console.log(email);
      
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name,
          password,
          email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok") {
            alert(`User ${name} registered successfully!`);
          } else if (data.error) {
            alert(`Registration failed: ${data.error}`);
          }
          console.log(data, "userRegister");
        });
    
      }
        
        };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Sign Up</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleName}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                 <NavLink to="/"> <button type="submit" className="btn btn-primary">Sign Up</button> </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
