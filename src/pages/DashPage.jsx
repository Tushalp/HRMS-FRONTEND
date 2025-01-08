import React from "react";
import { Calender } from "./Calender";
import { IoIosPerson } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { AiFillBank } from "react-icons/ai";
import { Table } from "./Table";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

export const DashPage = () => {
  const [url, serUrl] = useState(
    "http://localhost:8080/api/admin/countAdmin"
  );
  const [adcount, setadcount] = useState();

  const [urltwo, setUrltwo] = useState(
    "http://localhost:8080/api/user/employeeCount"
  );
  const [empcount, setempcount] = useState();

  const [urltree, setUrltree] = useState(
    "http://localhost:8080/api/admin/allEmployeesalarysum"
  );
  const [sal, setSal] = useState();

  console.log("Member");
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      console.log(res.data);
      setadcount(res.data.adminCount);

      const emp = await axios.get(urltwo);
      console.log(emp.data);
      setempcount(emp.data.employeeCount);

      const sala = await axios.get(urltree);
      console.log(sala.data);
      setSal(sala.data.totalSalary);
    };
    fetch();
  }, [url]);

  return (
    <div className="Dashpage-main">
        <div className="dashpage-name">
         <h3>Dashboard</h3>
        </div>


      <div className="dashpagebox">
    <div className="dashpagebox-cant  red">
      <p>
        <IoIosPerson />
      </p>
      <div>
        <p>Total</p>
        <h3>Admin</h3>
      </div>
      <h1>{adcount}</h1>
    </div>


      <Link to={'/dashboard/EmployeeDestructure'} className="EmployeeDestructure">
      <div className="dashpagebox-cant  green">
      <p>
        <IoPersonSharp />
      </p>
      <div>
        <p>Total</p>
        <h3>Employees</h3>
      </div>
      <h1>{empcount}</h1>
    </div>
      </Link>

    <div className="dashpagebox-cant blue">
      <p>
        <AiFillBank />
      </p>
      <div>
        <p>Total</p>
        <h3>Account Balance</h3>
      </div>
      <p>{sal}</p>
    </div>
  </div>


  <div className="dashpage-data">
    <div className="cale-div">
      <h3 className="dashpage-name">Calendar</h3>
      <Calender />
    </div>

    <div className="dashpade-table">
      <h3 className="dashpage-name">Announcement List</h3>
      <Link to={"/dashboard/announcement"} className="add-btn">
        <IoMdAddCircle />
      </Link>
      <Table />
    </div>
  </div>

    </div>
  );
};
