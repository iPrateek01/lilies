import { Outlet } from "react-router-dom";
import NavForDashboard from "../components/Dashboard/NavForDashboard";

function Dashboard() {
  return (
    <>
      <div className="w-full h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
        <NavForDashboard />
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
