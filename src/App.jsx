import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  // const location = useLocation();

  const router = createBrowserRouter(
    createRoutesFromElements(
      // <AnimatePresence>
        <Route path="/">
          <Route path="" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
       
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
