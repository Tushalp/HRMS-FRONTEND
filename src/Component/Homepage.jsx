import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormdata((prevfomedata) => {
      return {
        ...prevfomedata,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  function submithandler(event) {
    event.preventDefault();
    console.log(formdata);
    setSuccess("");
    setError("");

    if (
      !formdata.fullName ||
      !formdata.email ||
      !formdata.password
    ) {
      setError("Please fill in all fields correctly.");
      return;
    }

    axios
      .post("https://hrms-backend-tqlm.onrender.com/api/user/signUp", formdata)
      .then((response) => {
        console.log("Response from server:", response.data);
        setSuccess("Signup successful!");

        setFormdata({
          fullName: "",
          email: "",
          password: "",
        });

        // if (formdata.role === "Admin") {
        //   navigate("/Adminlogin");
        // }

        // if (formdata.role === "Employee") {
        //   navigate("/employeelogin");
        // }

          navigate("/employeelogin");
      })
      .catch((error) => {
        console.log("error hai bhai.........", error);
        console.log("Error response:", error.response);
        console.log("Error details:", error.response.data);
        setError(error.response.data.message);
      });
  }

  function clickhandler() {
    navigate("/employeelogin");
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>

        <form onSubmit={submithandler}>
          {success && <div className="success">{success}</div>}
          {error && <div className="error">{error}</div>}

          <div className="form-group">
            <label>Full Name</label>
            <div>
              <input
                type="text"
                placeholder="Enter Full Name"
                name="fullName"
                value={formdata.fullName}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formdata.email}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={formdata.password}
                onChange={changeHandler}
              />
            </div>
          </div>
{/* 
          <div className="form-group">
            <div className="checked">
            <label>Request Admin Roll</label>
            <div>
            <input className="checked"
              type="checkbox"
              name="visable"
              checked={formdata.visable}
              onChange={changeHandler}
              />
            </div>
            </div>
          </div> */}

          <button type="submit" className="submit-btn">
            Register
          </button>

          <div className="login-link">
            <p>
              Already have an account? <span onClick={clickhandler}>Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
