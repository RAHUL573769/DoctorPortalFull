import React from "react";
import doctor from "../ImagesFoder/assets/images/appointment.png";
import doctor1 from "../ImagesFoder/assets/images/doctor.png";
const Doctor = () => {
  return (
    <div
      className="mt-32
    "
      style={{
        background: `url(${doctor})`
      }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor1}
            className=" -mt-20 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl  text-primary">Appointment</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
