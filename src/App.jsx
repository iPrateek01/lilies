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
    // Check if the loading screen has been displayed in this session
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoading");

    if (!hasSeenLoading) {
      // If not seen, show the loading screen and set the flag for this session
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasSeenLoading", "true");
      }, 2000); // Loading delay of 2 seconds
    } else {
      // If already seen, skip the loading screen
      setIsLoading(false);
    }

    // Detect when user comes back to the tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // Reset the loading screen when the user comes back to the tab
        sessionStorage.removeItem("hasSeenLoading");
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("hasSeenLoading", "true");
        }, 2000); // Show loading screen again for 2 seconds
      }
    };

    // Listen for visibility change events
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup listener when component unmounts
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
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
