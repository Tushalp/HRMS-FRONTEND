import React from "react";
import { useNavigate } from "react-router-dom";

export const Newpage = () => {
  const navigat = useNavigate();

  function clickhandler() {
    navigat("/Adminlogin");
  }

  function handelclick() {
    navigat("/employeelogin");
  }

  return (
    <div className="home">
       <img src="https://jerp.jmrinfotech.com/images/hrms.jpg" className="newpage-img"></img>

        <div className="newpage-btn">
        <button onClick={clickhandler} className="btn">
          Admin
        </button>

        <button onClick={handelclick} className="btn">
          Employee
        </button>
        </div>

    </div>
  );
};
