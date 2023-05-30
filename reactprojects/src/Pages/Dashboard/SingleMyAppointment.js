import React from "react";

const SingleMyAppointment = ({ booking, index }) => {
  const { patient, selectedDate, treatment } = booking;
  // console.log(booking);
  // console.log(index);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}

          <tbody>
            <tr>
              <th>{index + 1}</th>
              <td>{patient}</td>
              <td>{selectedDate}</td>
              <td>{treatment}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleMyAppointment;
