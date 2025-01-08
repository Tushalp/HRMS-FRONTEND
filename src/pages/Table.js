import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";

export const Table = () => {
  const [url, seturl] = useState(
    "http://localhost:8080/api/admin/getallDocument"
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

  function handeldelete(id) {
    axios
      .delete("http://localhost:8080/api/admin/deletedocument/" + id)
      .then((result) => {
        window.location.reload();
      });
  }

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
            <th className="dashboredTh">Action</th>
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
                <td className="dashboredTd">
                  <span
                    className="employee-btn"
                    onClick={() => handeldelete(e.id)}
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
  );
};
