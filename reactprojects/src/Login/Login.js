import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignUp from "../Pages/SignUp/SignUp";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const { signInWithEmail } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    setLoginError("");
    signInWithEmail(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        // toast("User Logged In");
        navigate(from, { replace: true });

        // ...
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  return (
    <div className=" h-[800px] flex justify-center items-center">
      <div className="w-96">
        <h1 className="text-4xl">This is Login</h1>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label htmlFor="">Email</label>
            <input
              type="text"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please Provide Valid Format" // JS only: <p>error message</p> TS only support string
                }
              })}
              placeholder="Enter Email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <span>{errors.email?.message}</span>}
          </div>
          <div className="form-control w-full ">
            <label htmlFor="">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 8,
                  message: "Must be 6 characters"
                }
                // pattern: {
                //   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                //   message: "Pattern in ot " // JS only: <p>error message</p> TS only support string
                // }
              })}
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <span className="text-red-600">{errors.password?.message}</span>
            )}
          </div>
          <br />
          <button class="btn btn-primary w-96">Button</button>{" "}
          <div>
            {" "}
            {loginError && <p className="text-red-700">{loginError}</p>}
          </div>
        </form>
        <p>
          New to Doctor's Portal? <Link to="/signup">Register</Link>
        </p>
        <button on class="btn btn-primary w-96">
          Login In With Google
        </button>{" "}
      </div>
    </div>
  );
};

export default Login;
