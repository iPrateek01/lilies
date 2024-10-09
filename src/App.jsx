import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import AnimateRoutes from "./components/AnimateRoutes.jsx";



function App() {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      
        <Route path="/" element={<AnimateRoutes />}>
          <Route index element={<LandingPage />} />
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
