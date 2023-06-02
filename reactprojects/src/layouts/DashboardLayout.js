import React, { useContext } from "react";
import Header from "../Shared/Header";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "react-query";

const DashboardLayout = () => {
  //   const { currentUser } = useContext(AuthContext);

  //   const url = `http://localhost:9000/bookings?email=${currentUser?.email}`;
  //   const { data: bookings = [] } = useQuery({
  //     queryKey: ["bookings", currentUser?.email],
  //     queryFn: async () => {
  //       const result = await fetch(url);
  //       const data = await result.json();

  //       return data;
  //     }
  //   });

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard/appointment">My Appointment</Link>
            </li>
            <li>
              <Link to="/dashboard/allusers">All Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
