import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLoginToggle = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSignupToggle = () => {
    setShowSignupForm(!showSignupForm);
  };

  return (
    <><nav className="navbar navbar-expand-lg navbar-light bg-light.bg-gradient">
    <div className="container-fluid">
      <NavLink  className="navbar-brand fw-bold fs-4" to="/">eDOOKAN Books</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
            <NavLink  className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/products">Products</NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink  className="nav-link" to="/aboutus">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
            
            <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-secondary ms-2"> <i className="fa fa-sign-in me-1"></i> Login</NavLink>
              
              <NavLink to="/signup" className="btn btn-outline-secondary ms-2"> <i className="fa fa-user-plus me-1"></i> Register</NavLink>
         
              <CartBtn />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;








