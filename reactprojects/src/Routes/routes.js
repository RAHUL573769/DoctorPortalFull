import Login from "../Login/Login";
import Appointment from "../Pages/Appointment/Appointment";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");
const { default: Home } = require("../HomePage/Home");

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
      }
    ]
  }
]);
export default router;
