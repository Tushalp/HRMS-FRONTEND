import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export const Node = () => {

    const [url, setUrl] = useState(
        "https://hrms-backend-tqlm.onrender.com/api/admin/nodeEmployeeData"
      );
      const [employee, setEmployee] = useState([]);
      const [amount, setAmount] = useState();

      useEffect(()=> {
        const fetch = async()=>{
         const res=await axios.get(url);
         console.log(res.data.nodeEmployee);
         setEmployee(res.data.nodeEmployee);
         console.log(res.data.nodeEmployeeSalarySum);
         setAmount(res.data.nodeEmployeeSalarySum);
        }

        fetch();
      },[url])


  return (
    <div className="Dashpage-main">
    <div className="dashpage-name">
      <h3>Node Js</h3>
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
  )
}
