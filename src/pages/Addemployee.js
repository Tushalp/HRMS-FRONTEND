import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Addemployee = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    employeeID: "",
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    technologies: "",
    salary: "",

    bankDetails:{
    accountNumber: "",
    bankName: "",
    ifscCode:"",
    branchName:"",
    }

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


  function Handlertochange(event) {
    const { name, value } = event.target;
    setFormdata((prevfomedate) => {
      return {
        ...prevfomedate,
        bankDetails:{
          ...prevfomedate.bankDetails,
          [name]: value,
        }
        
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
      (!formdata.technologies &&  formdata.technologies==="select Type")|| 
      !formdata.salary||
      !formdata.bankDetails.accountNumber||
      !formdata.bankDetails.bankName||
      !formdata.bankDetails.ifscCode||
      !formdata.bankDetails.branchName
    ) {
      setError("Please fill in all fields correctly.");
      return;
    }

    axios
      .post("http://localhost:8080/api/admin/employeeAlldetails", formdata)
      .then((response) => {
        console.log("Response from server:", response.data);
        setSuccess("Add employee successful!");

        setFormdata({
          employeeID: "",
          name: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          address: "",
          technologies: "",
          salary: "",
          accountNumber: "",
          bankName: "",
          ifscCode:"",
          branchName:"",
        });

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
      <div className="emp-details">
      <form onSubmit={submithandler}>

      {success && <div className="success">{success}</div>}
      {error && <div className="error">{error}</div>}

      <div  className="details-data">
        <div>
        <h1 className="details-head">Employee Details</h1>
       
          <div className="emp-data">

            <div className="emp-input">
              <label>Employee ID*</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter your id"
                  name="employeeID"
                  value={formdata.employeeID}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="emp-input">
              <label>Full Name*</label>
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

            <div className="emp-input">
              <label>Email*</label>
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

            <div className="emp-input">
              <label>Phone No</label>
                <input
                  type="number"
                  placeholder="Enter Your Number"
                  name="phone"
                  value={formdata.phone}
                  onChange={changeHandler}
                />
              
            </div>

            <div className="emp-input">
              <label>DOB*</label>
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

            <div className="emp-input">
              <label>Address*</label>
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

            <div className="emp-input">
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

            <div className="emp-input">
              <label>Salary*</label>
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

          </div>
          </div>


           <div>
           <h1 className="details-head">Account Details</h1>
          <div className="emp-data">
          <div>
              <label>Account Number*</label>
              <div className="emp-input">
                <input
                  type="number"
                  placeholder="Enter Account Number"
                  name="accountNumber"
                  value={formdata.bankDetails.accountNumber}
                  onChange={Handlertochange}
                />
              </div>
            </div>

            <div className="emp-input">
              <label>Bank Name*</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Bank Name"
                  name="bankName"
                  value={formdata.bankDetails.bankName}
                  onChange={Handlertochange}
                />
              </div>
            </div>

            <div className="emp-input">
              <label>IFSC Code*</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Code Number"
                  name="ifscCode"
                  value={formdata.bankDetails.ifscCode}
                  onChange={Handlertochange}
                />
              </div>
            </div>

            <div className="emp-input">
              <label>Branch Name*</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Branch Name"
                  name="branchName"
                  value={formdata.bankDetails.branchName}
                  onChange={Handlertochange}
                />
              </div>
            </div>

            {/* <div className="emp-input">
              <label>IFSC Code*</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Code Number"
                  name="ifscCode"
                  value={formdata.bankDetails.ifscCode}
                  onChange={Handlertochange}
                />
              </div>
            </div> */}

          </div>
          </div>
      </div>

      <button type="submit" className="submit-btn">
            Add Employee
          </button>
        </form>
        </div>
    </div>
  );
};



