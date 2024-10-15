import { Outlet } from "react-router-dom";
import DishDetails from "../components/Dashboard/DishDetails";
import Drawer from "../components/Dashboard/Drawer";

function Dashboard() {
  return (
    <>
      <div className="w-full h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
        <Drawer />
        <Outlet />
        <DishDetails />
      </div>
    </>
  );
}

export default Dashboard;
