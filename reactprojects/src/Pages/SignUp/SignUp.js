import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const { auth, signInGooglePopUp, createUser } = useContext(AuthContext);
  const provider1 = new GoogleAuthProvider();
  const { signUpError, setSignUpError } = useState("");
  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast("User Created Succsfully");
        // ...
      })
      .catch((error) => {
        console.log(error);

        const errorMessage = error.message;
        setSignUpError(errorMessage);
        // ..
      });
  };

  const handleGoogleSignUp = () => {
    signInGooglePopUp(auth, provider1)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.

        // The AuthCredential type that was used.
        // ...
      });
  };
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
        <button onClick={handleGoogleSignUp}>Continue with Google</button>
      </div>
    </div>
  );
};

export default SignUp;
