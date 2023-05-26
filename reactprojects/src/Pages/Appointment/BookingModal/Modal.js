import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Modal = ({ treatments, selected }) => {
  const { name, slots } = treatments;
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const date = format(selected, "PP");
  const handleSubmit = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const email = e.target.email.value;
    const name = e.target.name.value;
    const phone = e.target.phone.value;

    const booking = {
      selectedDate: date,
      name,
      slot,
      email,
      phone
    };
    console.log(booking);
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="py-4">
            <form onSubmit={handleSubmit} className="grid gap-6" action="">
              <input
                type="text"
                disabled
                value={date}
                placeholder="Type here"
                className="input w-full "
              />
              <select name="slot" className="select select-bordered w-full">
                {slots.map((slot) => (
                  <option value={slot}>{slot}</option>
                ))}
              </select>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input w-full"
              />
              <input
                type="text"
                disabled
                name="email"
                value={currentUser.email}
                placeholder="Type here"
                className="input w-full"
              />
              <input
                type="text"
                placeholder="Type here"
                name="phone"
                className="input w-full"
              />
              <button className="btn btn-primary w-full" type="submit">
                Submit
              </button>
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
