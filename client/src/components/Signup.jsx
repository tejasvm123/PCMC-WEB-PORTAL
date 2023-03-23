import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    address: "",
  });
  let name, value;
  const handleInputs = (event) => {
    //console.log(event);
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  //we will use fetch API to post data which returns a promise
  const PostData = async (event) => {
    event.preventDefault();
    const { name, email, password, cpassword, phone, address } = user;

    const res = await fetch("/register", {
      //these key-value pair are similar to data or elements shown on postman while posting the data
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
        phone,
        address,
      }),
    });
    const data = await res.json();

    if (data.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");

      history.push("/login");
    }
  };
  return (
    <>
      <section className="signup_reg container shadow p-3 mb-5 bg-body rounded">
        <div className="container mt-2">
          <div className="signup-content">
            <h2 className="text-center">Sign Up</h2>
            <hr />
            <div className="signup-form row">
              <div className="col-md-6">
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="p-0 form-group">
                    <label htmlFor="name">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInputs}
                      placeholder="Your name"
                      className="col-8 form-control form-control"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Your email ID"
                      className="col-8 form-control"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInputs}
                      placeholder="Enter your password"
                      className="col-8 form-control"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </label>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      autoComplete="off"
                      value={user.cpassword}
                      onChange={handleInputs}
                      placeholder="Re-enter your password"
                      className="col-8 form-control"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="fa fa-phone-square" aria-hidden="true"></i>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="Your phone number"
                      className="col-8 form-control"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">
                      <i className="fa fa-briefcase" aria-hidden="true"></i>
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="off"
                      value={user.address}
                      onChange={handleInputs}
                      placeholder="Your address"
                      className="col-8 form-control"
                    ></input>
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="register"
                      id="register"
                      onClick={PostData}
                      className="form-submit btn btn-outline-primary"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image col-md-6">
                {/* <figure>
                  <img src={signpic} height="300" width="300" alt="not found" />
                </figure> */}
                <NavLink to="/login" className="text-center signup-image-link">
                  Already Registered?
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Signup;
