import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "react-query";
import SingleMyAppointment from "./SingleMyAppointment";

const MyAppointment = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.email);
  const url = `http://localhost:9000/bookings?email=${currentUser?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", currentUser?.email],
    queryFn: async () => {
      const result = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`
        }
      });
      const data = await result.json();

      return data;
    }
  });
  console.log(bookings);

  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Date</th>
            <th>Name of Treatment</th>
          </tr>
        </thead>
      </table>
      <table className="table w-full">
        {bookings.map((booking, index) => (
          <SingleMyAppointment
            booking={booking}
            index={index}
          ></SingleMyAppointment>
        ))}
      </table>
    </div>
  );
};

export default MyAppointment;
