import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const EmpApplyleav = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
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

  async function submithandler(event) {
    event.preventDefault();
    console.log(formdata);
    setSuccess("");
    setError("");

    if (
      !formdata.leaveType ||
      !formdata.startDate ||
      !formdata.endDate ||
      !formdata.reason
    ) {
      setError("Please fill in all fields correctly.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:8080/api/user/leaveapply",
        formdata,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setSuccess("Request Send To Admin!");

      setFormdata({
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
      });

      navigate(`/dashbordemployee/${id}/empleave/${id}`);
    } catch (error) {
      console.log("error hai bhai.........", error);
      console.log("Error response:", error.response);
      console.log("Error details:", error.response.data);
      setError(error.response.data.message);
    }
  }

  return (
    <div className="addemploye-main">
      <div className="register-box">
        <h3>Apply For Leave</h3>

        <form onSubmit={submithandler}>
          {success && <div className="success">{success}</div>}
          {error && <div className="error">{error}</div>}

          <div className="form-group">
            <label>Leave Type*</label>
            <div>
              <select
                name="leaveType"
                value={formdata.leaveType}
                onChange={changeHandler}
                placeholder="Select Type"
              >
                <option value="select Type">select Type</option>
                <option value="Annualleave">Annual leave</option>
                <option value="Casualleave">Casual leave</option>
                <option value="Sickleave">Sick leave</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Start Date*</label>
            <div>
              <input
                type="date"
                placeholder="Enter Your Email"
                name="startDate"
                value={formdata.startDate}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label>End Date*</label>
            <div>
              <input
                type="date"
                placeholder="Enter Your Email"
                name="endDate"
                value={formdata.endDate}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Reason*</label>
            <div>
              <input
                type="text"
                placeholder="Enter Your salary"
                name="reason"
                value={formdata.reason}
                onChange={changeHandler}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Apply Leave
          </button>
        </form>
      </div>
    </div>
  );
};
