import Login from "../Login/Login";
import Appointment from "../Pages/Appointment/Appointment";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Main from "../layouts/Main";
import Home from "../HomePage/Home";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/appointment", element: <Appointment /> },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        )
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  }
]);
export default router;
