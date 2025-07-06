import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error/ErrorPage";
import Analytics from "../pages/analytics/Analytics";
import Login from "../pages/authentication/Login";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import ForgetPassword from "../pages/authentication/ForgetPassword";
import VerifyOTP from "../pages/authentication/VerifyOTP";
import SetNewPassword from "../pages/authentication/SetNewPassword";
import StaffList from "../pages/dashboard/StaffList/StaffList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <Dashboard />,},    
      {path: "/staff-list", element: <StaffList />,},    
    ],
  },
  {path: "/login", element: <Login />,},
  {path: "/forget-password", element: <ForgetPassword />,},
  {path: "/verify-otp", element: <VerifyOTP />,},
  {path: "/register", element: <Register />,},
  {path: "/setnew-password", element: <SetNewPassword />,},
]);

export default router;
