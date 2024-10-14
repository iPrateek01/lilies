import { Outlet } from "react-router-dom";
import DishDetails from "../components/Dashboard/DishDetails";
import Drawer from "../components/Dashboard/Drawer";

function Dashboard() {
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-white">
        <Drawer />
        <Outlet />
        <DishDetails />
      </div>
    </>
  );
}

export default Dashboard;
