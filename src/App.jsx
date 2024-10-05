import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Authentication from "./pages/Authentication.jsx"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/authentication" element={<Authentication />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router = { router } />
    </>
  )
}

export default App
