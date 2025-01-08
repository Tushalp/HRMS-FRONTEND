import React from "react";
import { Calender } from "../pages/Calender";
import { Table } from "../pages/Table";
import { Emptable } from "./Emptable";

export const Empdashpage = () => {
  return (
    <div className="Dashpage-main">
      <div className="dashbord-second">
        <div className="dashpage-name">
          <h3>Dashboard</h3>
        </div>

        <div className="dashpage-data">
          <div className="cale-div">
            <h3 className="dashpage-name">Calendar</h3>
            <Calender />
          </div>

          <div className="dashpade-table">
            <h3 className="dashpage-name">Announcement List</h3>
            <Emptable/>
          </div>
        </div>
      </div>
    </div>
  );
};
