import React from "react";
import { Link } from "react-router-dom";
import { FiGrid } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { FcLeave } from "react-icons/fc";
import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsGraphUpArrow } from "react-icons/bs";

export const Empdashbord = () => {
  const { id } = useParams();
  const [isopen, setIsopen] = useState(true);
  const navigate = useNavigate();

  function clickhandler(){
    setIsopen(!isopen);
  }


  async function handleLogout() {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      console.error("No token found. Redirecting to login.");
      navigate("/");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/api/admin/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // "Content-Type": "application/json",
          },
        }
      );

      console.log("Logout successful frontend");
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error(
        "Error hai logout me: ",
        error.response?.data || error.message
      );
    }
  }


  return (
    <div className="dashbored">

    <div>
    <header className="header">
          
         <button className="header-btn" onClick={clickhandler}>☰</button>

        <div className="header-div">
        <img
            class="header_image"
            src="https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
            height={20}
            width={20}
          />
          <button class="header__button" onClick={handleLogout}>
            <IoIosLogOut />
          </button>
        </div>
      </header>
    </div>
     

     <div className="dashboard-second">
      <div>
        <div className={`dashboard-sidbar ${isopen ? "open" : "closed"}`}>


  <div className="sidebar-list">
  <ul className="sidebar-ul">
    <li className="sidebar-li">
      <Link
        to={`/dashbordemployee/${id}`}
        className="sidebar-link"
        data-tooltip="Dashboard"
      >
        <span className="sidebar-icon">
          <FiGrid />
        </span>
        <span className="sidebar-text">Dashboard</span>
      </Link>
    </li>

    <li className="sidebar-li">
      <Link
        to={`/dashbordemployee/${id}/empemployee/${id}`}
        className="sidebar-link"
        data-tooltip="Employee"
      >
        <span className="sidebar-icon">
          <IoPersonOutline />
        </span>
        <span className="sidebar-text">Employee</span>
      </Link>
    </li>

    <li className="sidebar-li">
      <Link
        to={`/dashbordemployee/${id}/empleave/${id}`}
        className="sidebar-link"
        data-tooltip="Manage Leave"
      >
        <span className="sidebar-icon">
          <FcLeave />
        </span>
        <span className="sidebar-text">Manage leave</span>
      </Link>
    </li>
  </ul>
</div>
        </div>
      </div>


      <div className={`dashboard-outlet ${isopen ? "outletopen" : "outletclose" }`}><Outlet/></div>
     </div>
  </div>
  );
};
