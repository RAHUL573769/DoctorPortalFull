import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className=" h-[800px] flex justify-center items-center">
      <div>
        <h1 className="text-4xl">Register Here</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              {...register("firstName", {
                required: "Name is Required" // JS only: <p>error message</p> TS only support string
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.firstName && (
              <p className="text-red-700">{errors.firstName?.message}</p>
            )}
          </div>{" "}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email?</span>
            </label>
            <input
              type="email"
              placeholder="Email Here"
              {...register("email", {
                required: "Email is Required" // JS only: <p>error message</p> TS only support string
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-700">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              {...register("password", {
                required: "Password is Required" // JS only: <p>error message</p> TS only support string
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-700">{errors.password?.message}</p>
            )}
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            Button
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
