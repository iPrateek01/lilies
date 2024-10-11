import { useEffect,useState } from "react";
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
import LoadingScreen from "./pages/LoadingScreen.jsx";



function App() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for the loading screen
    setTimeout(() => setIsLoading(false), 2000); // Loading delay of 2 seconds
  }, []);


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
     {isLoading ? (
        <LoadingScreen />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
