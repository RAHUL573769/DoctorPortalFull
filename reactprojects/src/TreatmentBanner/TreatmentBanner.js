import React from "react";
import treatment from "../ImagesFoder/assets/images/treatment.png";
const TreatmentBanner = () => {
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">
              Exception Dental Care on Your Terms
            </h1>
            <p className="py-6">
              {" "}
              We provide Exception Dental Care on Your Terms
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentBanner;
