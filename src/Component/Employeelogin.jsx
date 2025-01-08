import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Employeelogin = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormdata((prevfomedate) => {
      return {
        ...prevfomedate,
        [name]: value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formdata);

    setSuccess("");
    setError("");

    if (!formdata.email || !formdata.password) {
      setError("Please fill in all fields correctly.");
      return;
    }

    axios
      .post("http://localhost:8080/api/user/employee/login", formdata)
      .then((response) => {
        console.log("Response from server:", response.data);
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        setSuccess("Login successful!");

        setFormdata({
          email: "",
          password: "",
        });

        console.log("ye console. ka data hai");
        console.log(response.data.employeeData.employeeID);
        navigate("/dashbordemployee/" + response.data.employeeData.employeeID);
      })
      .catch((error) => {
        console.log("error hai bhai.........", error);
        console.log("Error response:", error.response);
        console.log("Error details:", error.response.data);
        setError(error.response.data.message);
      });
  }

  function clickhandler() {
    navigate("/signup");
  }

  function passwordhandler() {
    navigate("/password");
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Login</h1>

        <form onSubmit={submitHandler}>
          {success && <div className="success">{success}</div>}
          {error && <div className="error">{error}</div>}

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

          <div className="login-link">
            <p>
              Forgot Your Password? <span onClick={passwordhandler}>Click</span>
            </p>
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>

          <div className="login-link">
            <p>
              Don't have an account?{" "}
              <span onClick={clickhandler}>Register</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
