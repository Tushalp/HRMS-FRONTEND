import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const EmpEmployees = () => {
  const { id } = useParams();
  const [url, setUrl] = useState(
    "https://hrms-backend-tqlm.onrender.com/api/user/employeePersonalDetails/" + id
  );
  const [employee, setEmployee] = useState([]);

  console.log("Member");
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      console.log(res.data.data);
      setEmployee(res.data.data);
    };
    fetch();
  }, [url]);
  return (
    <div className="Dashpage-main">
      <div className="dashbord-second">
        <div className="Employeetails">
          <div className="dashpage-name">
            <h3>Personal Detail</h3>
          </div>

          <div className="employeedata">
            <p>
              Employee ID : <span>{employee.employeeID}</span>
            </p>
            <p>
              Name : <span>{employee.name}</span>
            </p>
            <p>
              Email : <span>{employee.email}</span>
            </p>
            <p>
              Date of Birth : <span>{employee.dateOfBirth}</span>
            </p>
            <p>
              Phone : <span>{employee.phone}</span>
            </p>
            <p>
              Address : <span>{employee.address}</span>
            </p>
            <p>
              Salary : <span>{employee.salary}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
