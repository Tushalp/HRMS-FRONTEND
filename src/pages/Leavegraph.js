import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Leavegraph = () => {
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

  const options = {};

  const barChatData = {
    labels: employee.map((item) => item.employeeID),
    datasets: [
      {
        label: "Salary",
        data: employee.map((item) => item.salary),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(54,162,235,1)",
        // Colors:'#4a90e2',
        borderWidth: 1,
      },
    ],
  };

  return (

 <div className="Dashpage-main">
<div className="dashpage-name">
 <h3>Salary Graph</h3>
</div>

<div className="slarygraph">
<Bar options={options} data={barChatData} />
</div> 

</div>
    
  );
};
