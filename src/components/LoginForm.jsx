import { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    if (!email) {
      setEmailError("Please enter your email");
      hasError = true;
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Please enter your password");
      hasError = true;
    }

    if (!hasError) {
      console.log("Email:", email);
      console.log("Password:", password);
      setEmail("");
      setPassword("");

      // fetch("http://localhost:5000/login", {
      //   method: "POST",
      //   crossDomain: true,
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password,
      //   }),
      // })
      // .then((res) => res.json())
      // .then((data) => {
      //   if (data.status === "ok") {
      //     alert(`Logged in successfully!`);
      //   } else if (data.error) {
      //     alert(`Loggin failed: ${data.error}`);
      //   }
      //   console.log(data, "userLoggIn");
      // });
      
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  return(
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
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
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                 <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


 
};

export default LoginForm;