import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error/ErrorPage";
import Analytics from "../pages/analytics/Analytics";
import Login from "../pages/authentication/Login";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import ForgetPassword from "../pages/authentication/ForgetPassword";
import VerifyOTP from "../pages/authentication/VerifyOTP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <Dashboard />,},
      {path: "/analytics", element: <Analytics />,},
    ],
  },
  {path: "/login", element: <Login />,},
  {path: "/forget-password", element: <ForgetPassword />,},
  {path: "/verify-otp", element: <VerifyOTP />,},
  {path: "/register", element: <Register />,},
]);

export default router;
