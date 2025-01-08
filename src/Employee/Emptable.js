import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";

export const Emptable = () => {

    const [url, seturl] = useState(
        "https://hrms-backend-tqlm.onrender.com/api/user/getAllAnnouncementbyEmployee"
      );
      const [announcement, setAnnouncement] = useState([]);
    
      useEffect(() => {
        const fetch = async () => {
          const res = await axios.get(url);
          console.log(res.data.announcements);
          setAnnouncement(res.data.announcements);
        }
        fetch();
      }, [url]);


  return (
      <div>
      <table className="dashboredTable">
        <thead className="dashboredThade">
          <tr className="dashboredtr">
            <th className="dashboredTh">Title</th>
            <th className="dashboredTh">Conducted By</th>
            <th className="dashboredTh">Date</th>
            <th className="dashboredTh">Start Time</th>
            <th className="dashboredTh">End Time</th>
          </tr>
        </thead>
        <tbody className="dashboredtbody">
          {announcement.map((e) => {
            return (
              <tr className="dashboredtr">
                <td className="dashboredTd">{e.title}</td>
                <td className="dashboredTd">{e.conductedBy}</td>
                <td className="dashboredTd">{e.date}</td>
                <td className="dashboredTd">{e.startTime}</td>
                <td className="dashboredTd">{e.endTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
