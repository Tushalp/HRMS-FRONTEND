import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Password = () => {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormdata((prevfomedata) => {
      return {
        ...prevfomedata,
        [name]: value,
      };
    });
  }

  function submithandler(event) {
    event.preventDefault();
    console.log(formdata);

    setSuccess("");
    setError("");

    if (!formdata.email) {
      setError("Please fill in all fields correctly.");
      return;
    }

    axios
      .post("https://hrms-backend-tqlm.onrender.com/api/user/forgotPassword", formdata)
      .then((response) => {
        console.log("Response from server:", response.data);
        setSuccess("successful!");

        setFormdata({
          email: "",
        });

        navigate("/checkemail");
      })
      .catch((error) => {
        console.log("error hai bhai.........", error);
        console.log("Error response:", error.response);
        console.log("Error details:", error.response.data);
        setError(error.response.data.message);
      });
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Forgot Password</h1>

        <form onSubmit={submithandler}>
          {success && <div className="success">{success}</div>}
          {error && <div className="error">{error}</div>}

          <div className="form-group">
            <label>Email</label>
            <div>
              <input
                type="email"
                placeholder="Enter Full Name"
                name="email"
                value={formdata.email}
                onChange={changeHandler}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Reset Your Password
          </button>
        </form>
      </div>
    </div>
  );
};
