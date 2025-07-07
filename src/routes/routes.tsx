import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ForgetPassword from "../pages/authentication/ForgetPassword";
import Login from "../pages/authentication/Login";
import SetNewPassword from "../pages/authentication/SetNewPassword";
import VerifyOTP from "../pages/authentication/VerifyOTP";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import ManagerDetails from "../pages/dashboard/StaffList/ManagerDetails";
import StaffList from "../pages/dashboard/StaffList/StaffList";
import ErrorPage from "../pages/error/ErrorPage";
import Register from "../pages/register/Register";
import EmpolyeeDetails from "../pages/dashboard/StaffList/EmpolyeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <Dashboard />,},    
      {path: "/staff-list", element: <StaffList />,},    
      {path: "/manager-details/:id", element: <ManagerDetails />,},
      {path: "/employee-details/:id", element: <EmpolyeeDetails />,},
    ],
  },
  {path: "/login", element: <Login />,},
  {path: "/forget-password", element: <ForgetPassword />,},
  {path: "/verify-otp", element: <VerifyOTP />,},
  {path: "/register", element: <Register />,},
  {path: "/setnew-password", element: <SetNewPassword />,},
]);

export default router;
