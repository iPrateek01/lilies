import { useEffect, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import LoginPage from "./pages/Authentication/LoginPage.jsx";
import SignupPage from "./pages/Authentication/SignupPage.jsx";
import AnimateRoutes from "./components/AnimateRoutes.jsx";
import LoadingScreen from "./pages/LandingPage/LoadingScreen.jsx";
import UserProfile from "./components/Dashboard/UserProfile.jsx";
import Addresses from "./components/Dashboard/Addresses.jsx";
import Orders from "./components/Dashboard/Orders.jsx";
import Cart from "./components/Dashboard/Cart.jsx";
import FoodMenu from "./components/Dashboard/FoodMenu.jsx";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";
import Admin from "./pages/Admin/Admin.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the loading screen has been shown in the current session
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoading");

    if (!hasSeenLoading) {
      // Show the loading screen for the first time
      setTimeout(() => {
        setIsLoading(false); // Hide loading screen after 2 seconds
        sessionStorage.setItem("hasSeenLoading", "true"); // Set flag in sessionStorage
      }, 2000); // Loading delay of 2 seconds
    } else {
      // Skip the loading screen if it has already been shown
      setIsLoading(false);
    }
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AnimateRoutes />}>
        <Route index element={<LandingPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="admin" element={<Admin />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<FoodMenu />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="addresses" element={<Addresses />} />
          </Route>
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
    )
  );

  return (
    <>{isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}</>
  );
}

export default App;
