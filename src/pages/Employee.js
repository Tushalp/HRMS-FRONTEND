import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LiaUserEditSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import { PiExportBold } from "react-icons/pi";
import { CgImport } from "react-icons/cg";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useRef } from "react";
import * as XLSX from "xlsx";

export const Employee = () => {
  const [excelfile, setExclefile] = useState([]);
  const [excleerror, setExcleerror] = useState();

  const [url, setUrl] = useState(
    "https://hrms-backend-tqlm.onrender.com/api/admin/getAllEmployee"
  );
  const [employee, setEmployee] = useState([]);

  console.log("Member");
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      console.log(res.data.employees);
      setEmployee(res.data.employees);
    };
    fetch();
  }, [url]);

  function handledelete(id) {
    axios
      .delete("https://hrms-backend-tqlm.onrender.com/api/admin/deleteEmployee/" + id)
      .then((result) => {
        window.location.reload();
      });
  }

  const tableRef = useRef(null);

  // Function to handle exporting data to Excel
  const handleExport = async () => {
    try {

      const response = await axios.get(
        "https://hrms-backend-tqlm.onrender.com/api/admin/getemployee/export",
        {
          responseType: "blob", 
        }
      );

      
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

    
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "employees.xlsx"; 

      link.click();
    } catch (error) {
      console.error("Error exporting data:", error);
      alert("Failed to export data");
    }
  };

  const handelsubmit = async (e) => {
    e.preventDefault();

    if (excelfile !== null) {
      const formData = new FormData();
      formData.append("file", excelfile); 

      try {
        const response = await axios.post(
          "https://hrms-backend-tqlm.onrender.com/api/admin/import-and-send-emails",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", 
            },
          }
        );
        console.log("Response:", response.data);
        window.location.reload();
      } catch (error) {
        console.error(
          "Error importing Excel data:",
          error.response?.data || error.message
        );
      }
    } else {
      console.log("Please select a valid Excel file.");
    }
  };

  return (
          
    <div className="Dashpage-main">
         <div>
          <h3 className="dashpage-name">Employee List</h3>
         </div>

         
         <Link to={"/dashboard/addemployee"} className="dashbord-btn">
         Add Employee
         </Link>
        
       
       <div className="inputbar">
       <div  className="input-data"> 
      <input className="input"
    type="file"
    onChange={(e) => {
      const file = e.target.files[0];
      setExclefile(file);
    }}
    accept=".xlsx"
  />
  
  <span className="excle" onClick={handelsubmit}>
    <CgImport />
  </span>
  <span className="excle" onClick={handleExport}>
    <PiExportBold />
  </span>
      </div>
       </div>





    <div>
    <table className="employeetable" ref={tableRef}>
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
          <th className="employeeth">Action</th>
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
              <td className="employeetd">
                <Link to={"/dashboard/editemployee/" + e.id}>
                  <span className="employee-btn">
                    <LiaUserEditSolid />
                  </span>
                </Link>
                <span
                  className="employee-btn"
                  onClick={() => handledelete(e.id)}
                >
                  <MdDeleteOutline />
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>

    </div>
  );
};


