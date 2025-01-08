import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./Component/Homepage";
import { Routes } from "react-router";
import { Route } from "react-router";
import { Login } from "./Component/Login";
import { Mainpage } from "./Component/Mainpage";
import { Dashboard } from "./pages/Dashboard";
import { Employee } from "./pages/Employee";
import { Manageleave } from "./pages/Manageleave";
import { DashPage } from "./pages/DashPage";
import { Addemployee } from "./pages/Addemployee";
import { Employeelogin } from "./Component/Employeelogin";
import { EditEmployee } from "./pages/EditEmployee";
import { Applyleave } from "./pages/Applyleave";
import { Empdashbord } from "./Employee/Empdashbord";
import { Empdashpage } from "./Employee/Empdashpage";
import { EmpEmployees } from "./Employee/EmpEmployees";
import { Empleave } from "./Employee/Empleave";
import { EmpApplyleav } from "./Employee/EmpApplyleav";
import { Leavegraph } from "./pages/Leavegraph";
import { Newpage } from "./Component/Newpage";
import { Announcement } from "./pages/Announcement";
import { Password } from "./Component/Password";
import { Newpassword } from "./Component/Newpassword";
import { Checkemail } from "./Component/Checkemail";
import { EmployeeDestructure } from "./pages/EmployeeDestructure";
import { Node } from "./Destructure/Node";
import { Myrea } from "./Destructure/Myrea";
import { Python } from "./Destructure/Python";
import { Laravel } from "./Destructure/Laravel";
import { Mern } from "./Destructure/Mern";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Newpage />}></Route>
        <Route path="/Adminlogin" element={<Login />}></Route>
        <Route path="/signup" element={<Homepage />}></Route>
        <Route path="/employeelogin" element={<Employeelogin />}></Route>
        <Route path="/password" element={<Password />}></Route>
        <Route path="/newpassword/:token" element={<Newpassword />}></Route>
        <Route path="/checkemail" element={<Checkemail />}></Route>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<DashPage />}></Route>
          <Route path="/dashboard/employee" element={<Employee />}></Route>
          <Route path="/dashboard/leave" element={<Manageleave />}></Route>
          <Route
            path="/dashboard/addemployee"
            element={<Addemployee />}
          ></Route>
          <Route
            path="/dashboard/editemployee/:id"
            element={<EditEmployee />}
          ></Route>
          <Route path="/dashboard/applyleav" element={<Applyleave />}></Route>
          <Route path="/dashboard/leavegraph" element={<Leavegraph />}></Route>
          <Route
            path="/dashboard/announcement"
            element={<Announcement />}
          ></Route>
          <Route
            path="/dashboard/EmployeeDestructure"
            element={<EmployeeDestructure />}
          ></Route>
          <Route path="/dashboard/node" element={<Node />}></Route>
          <Route path="/dashboard/myreact" element={<Myrea />}></Route>
          <Route path="/dashboard/python" element={<Python />}></Route>
          <Route path="/dashboard/laravel" element={<Laravel />}></Route>
          <Route path="/dashboard/mern" element={<Mern />}></Route>
        </Route>

        <Route path="/dashbordemployee/:id" element={<Empdashbord />}>
          <Route path="" element={<Empdashpage />}></Route>
          <Route
            path="/dashbordemployee/:id/empemployee/:id"
            element={<EmpEmployees />}
          ></Route>
          <Route
            path="/dashbordemployee/:id/empleave/:id"
            element={<Empleave />}
          ></Route>
          <Route
            path="/dashbordemployee/:id/empapplyleav/:id"
            element={<EmpApplyleav />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
