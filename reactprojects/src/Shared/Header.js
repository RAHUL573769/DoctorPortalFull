import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { signOut } from "firebase/auth";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

const Header = () => {
  const { currentUser, auth, logOut } = useContext(AuthContext);
  console.log(currentUser);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        console.log("Sinout Succcesful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  const menItems = (
    <>
      {" "}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/">About Us</Link>
      </li>
      <li>
        <Link to="/">Reviews</Link>
      </li>
      <li>
        {" "}
        <Link to="/dashboard">Dashboard</Link>
      </li>
      {currentUser?.email ? (
        <li>
          <Link onClick={handleSignOut}>Sign Out</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div
        className="navbar bg-base-100 flex justify-between
      "
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menItems}</ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Get started</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
