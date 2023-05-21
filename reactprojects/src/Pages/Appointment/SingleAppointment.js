import React from "react";

const SingleAppointment = ({ appointment, setTreatments }) => {
  const { name, slots } = appointment;
  console.log(appointment);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
          </p>
          <div className="card-actions">
            <label
              onClick={() => {
                setTreatments(appointment);
              }}
              htmlFor="my-modal-3"
              className="btn btn-primary"
            >
              open modal
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAppointment;
