import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export const Manageleave = () => {
  const [url, setUrl] = useState(
    "https://hrms-backend-tqlm.onrender.com/api/admin/checkallLeave"
  );
  const [employee, setEmployee] = useState([]);
  const [leave, setLeave] = useState();

  console.log("Member");
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      console.log(res.data.leaveRequests);
      setEmployee(res.data.leaveRequests);
    };
    fetch();
  }, [url]);

  function checkhandler(id) {
    axios
      .put("https://hrms-backend-tqlm.onrender.com/api/admin/approveRequestbyAdmin/" + id)
      .then((result) => {
        window.location.reload();
      });
  }

  function crosshandler(id) {
    axios
      .put("https://hrms-backend-tqlm.onrender.com/api/admin/rejectRequestbyAdmin/" + id)
      .then((result) => {
        window.location.reload();
      });
  }

  return (
    <div className="Dashpage-main">
      <div className="dashbord-second">
        <div>
          <h3 className="dashpage-name">Leave List</h3>
        </div>

        <Link to={"/dashboard/applyleav"} className="dashbord-btn">
          Apply Leave
        </Link>

        <div>
          <table className="employeetable">
            <thead className="employeethead">
              <tr className="employeetr">
                <th className="employeeth">Employee ID</th>
                <th className="employeeth">Leave Type</th>
                <th className="employeeth">Start Date</th>
                <th className="employeeth">End Date</th>
                <th className="employeeth">Reason</th>
                <th className="employeeth">Status</th>
                <th className="employeeth">Action</th>
              </tr>
            </thead>

            <tbody className="employeetbody">
              {employee.map((e) => {
                return (
                  <tr className="employeetr">
                    <td className="employeetd">{e.employeeID}</td>
                    <td className="employeetd">{e.leaveType}</td>
                    <td className="employeetd">{e.startDate}</td>
                    <td className="employeetd">{e.endDate}</td>
                    <td className="employeetd">{e.reason}</td>
                    <td className="employeetd">{e.status}</td>
                    <td className="employeetd">
                      <span
                        className="employee-btn"
                        onClick={() => checkhandler(e.id)}
                      >
                        <FaCheck />
                      </span>
                      <span
                        className="employee-btn"
                        onClick={() => crosshandler(e.id)}
                      >
                        <RxCross2 />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
