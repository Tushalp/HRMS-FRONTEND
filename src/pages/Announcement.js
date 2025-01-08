import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Announcement = () => {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    title: "",
    conductedBy: "",
    date: "",
    startTime: "",
    endTime: "",
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

  function submithandler(event) {
    event.preventDefault();
    console.log(formdata);
    setSuccess("");
    setError("");

    if (
      !formdata.title ||
      !formdata.conductedBy ||
      !formdata.date ||
      !formdata.startTime ||
      !formdata.endTime
    ) {
      setError("Please fill in all fields correctly.");
      return;
    }

    axios
      .post(
        "http://localhost:8080/api/admin/announcementdata/savedata",
        formdata
      )
      .then((response) => {
        console.log("Response from server:", response.data);
        setSuccess("Add successful!");

        setFormdata({
          title: "",
          conductedBy: "",
          date: "",
          startTime: "",
          endTime: "",
        });

        navigate("/dashboard");
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
        <h1>Announcement</h1>

        <form onSubmit={submithandler}>
          {success && <div className="success">{success}</div>}
          {error && <div className="error">{error}</div>}

          <div className="form-group">
            <label>Title</label>
            <div>
              <input
                type="text"
                placeholder="Enter Event Title"
                name="title"
                value={formdata.title}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Conducted By</label>
            <div>
              <input
                type="text"
                placeholder="Enter Name"
                name="conductedBy"
                value={formdata.conductedBy}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Date</label>
            <div>
              <input
                type="date"
                placeholder="Enter Date"
                name="date"
                value={formdata.date}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Start Time</label>
            <div>
              <input
                type="time"
                placeholder="Enter Start Time"
                name="startTime"
                value={formdata.startTime}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label>End Time</label>
            <div>
              <input
                type="time"
                placeholder="Enter End Time"
                name="endTime"
                value={formdata.endTime}
                onChange={changeHandler}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Add Announcement
          </button>
        </form>
      </div>
    </div>
  );
};
