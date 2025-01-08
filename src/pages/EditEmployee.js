import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    employeeID: "",
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    technologies:"",
    salary: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [url, setUrl] = useState(
    "http://localhost:8080/api/admin/adminGetEmployee/" + id
  );

  console.log("Member");
  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        console.log(result.data);
        setFormdata({
          ...formdata,
          employeeID: result.data.employeeID,
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
          dateOfBirth: result.data.dateOfBirth,
          address: result.data.address,
          salary: result.data.salary,
        });
      })
      .catch((err) => console.log(err));
  }, [url]);

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
      !formdata.employeeID ||
      !formdata.name ||
      !formdata.email ||
      !formdata.phone ||
      !formdata.dateOfBirth ||
      !formdata.address ||
      !formdata.technologies||
      !formdata.salary
    ) {
      setError("Please fill in all fields correctly.");
      return;
    }

    axios
      .put("http://localhost:8080/api/admin/editEmployee/" + id, formdata)
      .then((response) => {
        console.log("Response from server:", response.data);
        setSuccess(" Edit employee successful!");

        //  setFormdata({
        //    employeeID:'',
        //    name:'',
        //    email:'',
        //    phone:'',
        //    dateOfBirth:'',
        //    address:'',
        //    salary:''
        //  });

        navigate("/dashboard/employee");
      })
      .catch((error) => {
        console.log("error hai bhai.........", error);
        console.log("Error response:", error.response);
        console.log("Error details:", error.response.data);
        setError(error.response.data.message);
      });
  }

  return (
    <div className="addemploye-main">
      <div className="register-box">
        <h3>Edit Employee</h3>

        <form onSubmit={submithandler}>
          {success && <div className="success">{success}</div>}
          {error && <div className="error">{error}</div>}

          <div className="form-group">
            <label>Full Name</label>
            <div>
              <input
                type="text"
                placeholder="Enter Full Name"
                name="name"
                value={formdata.name}
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
            <label>Phone No</label>
            <div>
              <input
                type="number"
                placeholder="Enter Your number"
                name="phone"
                value={formdata.phone}
                onChange={changeHandler}
                // inputProps={{
                //   required : true
                // }}
              />
            </div>
          </div>

          <div className="form-group">
            <label>DOB</label>
            <div>
              <input
                type="date"
                placeholder="Enter Your Email"
                name="dateOfBirth"
                value={formdata.dateOfBirth}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <div>
              <input
                type="text"
                placeholder="Enter Your salary"
                name="address"
                value={formdata.address}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Technologies</label>
            <div>
              <select
                name="technologies"
                value={formdata.technologies}
                onChange={changeHandler}
                placeholder="Select Type"
              >
                <option value="">select Type</option>
                <option value="React">React</option>
                <option value="Node">Node</option>
                <option value="Python">Python</option>
                <option value="MERN">MERN</option>
                <option value="Laravel">Laravel</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Salary</label>
            <div>
              <input
                type="number"
                placeholder="Enter Your salary"
                name="salary"
                value={formdata.salary}
                onChange={changeHandler}
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Edit Employee
          </button>
        </form>
      </div>
    </div>
  );
};
