import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Python = () => {

    const [url, setUrl] = useState(
        "http://localhost:8080/api/admin/pythonEmployeeData"
      );
      const [employee, setEmployee] = useState([]);
      const [amount, setAmount] = useState();

      useEffect(()=> {
        const fetch = async()=>{
         const res=await axios.get(url);
         console.log(res.data.pythonEmployee);
         setEmployee(res.data.pythonEmployee);
         console.log(res.data.pythonEmployeeSalarySum);
         setAmount(res.data.pythonEmployeeSalarySum);
        }

        fetch();
      },[url])

  return (
    <div className="Dashpage-main">
      <div className="dashpage-name">
        <h3>Python</h3>
      </div>


      <div className='Destru-amount'>
        <h4>Total Amount</h4>
        <h6>{amount}</h6>
     </div>

      <div className="table">
    <table className="employeetable">
      <thead className="employeethead">
        <tr className="employeetr">
          <th className="employeeth">Employee ID</th>
          <th className="employeeth">Full Name</th>
          <th className="employeeth">Email</th>
          <th className="employeeth">Phone No</th>
          <th className="employeeth">DOB</th>
          <th className="employeeth">Address</th>
          <th className="employeeth">Technologies</th>
          <th className="employeeth">Salary</th>
        </tr>
      </thead>

      <tbody className="employeetbody">
        {employee.map((e) => {
          return (
            <tr className="employeetr">
              <td className="employeetd">{e.employeeID}</td>
              <td className="employeetd">{e.name}</td>
              <td className="employeetd"> <p className="para">{e.email}</p></td>
              <td className="employeetd">{e.phone}</td>
              <td className="employeetd">{e.dateOfBirth}</td>
              <td className="employeetd">{e.address}</td>
              <td className="employeetd">{e.technologies}</td>
              <td className="employeetd">{e.salary}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>

    </div>
  );
};
