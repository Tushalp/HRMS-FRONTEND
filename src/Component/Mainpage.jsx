import React, { useState } from "react";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { Outlet } from "react-router-dom";

export const Mainpage = ({ children }) => {
  const [isopen, setIsopen] = useState(true);

  function clickhandler() {
    setIsopen(!isopen);
  }

  return (
    <div className="Mainpage">
      <div>
        <div class="container">
          <header class="header">
            <div class="header__navigation">
              <div className="header_notification">
                <p class="header__name">
                  <IoNotificationsCircleOutline />
                </p>
                <img
                  class="header__image"
                  src="https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png"
                  height={20}
                  width={20}
                />
                <button class="header__button">
                  <IoIosLogOut />
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>

      <div>
        <div className={`sidebar ${isopen ? "open" : "closed"} `}>
          <div className="sidebar-header">
            <button className="toggle-btn" onClick={clickhandler}>
              {isopen ? <FaArrowCircleLeft /> : <FaArrowCircleRight />}
            </button>

            <div className="sidebar-name">{isopen ? "HRMS" : ""} </div>
            <div className="sidebar-img">
              {isopen ? (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-qkOa0CYa03WDLrc16DMGdmb3QBpTOOd13w&s"
                  height={30}
                  width={30}
                ></img>
              ) : (
                ""
              )}
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};
