import React from "react";
import { IoLogoNodejs } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { IoLogoPython } from "react-icons/io5";
import { TbBrandLaravel } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const EmployeeDestructure = () => {
  const [urlone, setUrlone] = useState(
    "https://hrms-backend-tqlm.onrender.com/api/admin/employeeCountsByTechnology"
  );
  const [dataone, setDataone] = useState("");


  useEffect(() => {
    const fetch = async () => {
      const resone = await axios.get(urlone);
      console.log(resone.data.counts);
      setDataone(resone.data.counts);
    };

    fetch();
  }, [urlone]);

  return (
    <div className="Dashpage-main">
      <div className="dashpage-name">
        <h3>EmployeeDestructure</h3>
      </div>

      <div className="dashpagebox">

        <Link to={'/dashboard/node'} className="EmployeeDestructure">
        <div className="dashpagebox-cant  red">
          <p>
            <IoLogoNodejs />
          </p>
          <div>
            <h3>Node Js</h3>
          </div>
          <h1>{dataone.Node}</h1>
        </div>
        </Link>


        <Link to={'/dashboard/myreact'} className="EmployeeDestructure">
        <div className="dashpagebox-cant  green">
          <p>
            <GrReactjs />
          </p>
          <div>
            <h3>React js</h3>
          </div>
          <h1>{dataone.React}</h1>
        </div>
        </Link>

        
        <Link to={'/dashboard/python'} className="EmployeeDestructure">
        <div className="dashpagebox-cant blue">
          <p>
            <IoLogoPython />
          </p>
          <div>
            <h3>Python</h3>
          </div>
          <h1>{dataone.Python}</h1>
        </div>
        </Link>


        <div className="destruct-data">

          <Link to={'/dashboard/laravel'} className="EmployeeDestructure">
          <div className="dashpagebox-cant black">
            <p>
              <TbBrandLaravel />
            </p>
            <div>
              <h3>Laravel</h3>
            </div>
            <h1>{dataone.Laravel}</h1>
          </div>
          </Link>


           <Link to={'/dashboard/mern'} className="EmployeeDestructure">
           <div className="dashpagebox-cant yello">
            <p>
              <FaCode />
            </p>
            <div>
              <h3>MERN</h3>
            </div>
            <h1>{dataone.MERN}</h1>
          </div>
           </Link>

        </div>
      </div>
    </div>
  );
};
