import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Newpassword = () => {
  const navigate = useNavigate();

  const { token } = useParams();
  console.log(token)

  const [formdata, setFormdata] = useState({
    newPassword: "",
    confirmPassword: "",
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

    if (!formdata.newPassword || !formdata.confirmPassword) {
      setError("Please fill in all fields correctly.");
      return;
    }

    axios
      .post(
        "https://hrms-backend-tqlm.onrender.com/api/user/resetPassword/" + token,
        formdata
      )
      .then((response) => {
        console.log("Response from server:", response.data);
        setSuccess("successful!");

        setFormdata({
          newPassword: "",
          confirmPassword: "",
        });

        navigate("/");
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
        <h1>Change Password</h1>

        <form onSubmit={submithandler}>
          {success && <div className="success">{success}</div>}
          {error && <div className="error">{error}</div>}

          <div className="form-group">
            <label>New Passwored</label>
            <div>
              <input
                type="password"
                placeholder="Enter Full Name"
                name="newPassword"
                value={formdata.newPassword}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Confirm Passwored</label>
            <div>
              <input
                type="password"
                placeholder="Enter Full Name"
                name="confirmPassword"
                value={formdata.confirmPassword}
                onChange={changeHandler}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            {" "}
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};
