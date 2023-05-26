import { format, set } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import SingleAppointment from "./SingleAppointment";
import Modal from "./BookingModal/Modal";

const AvailableAppointmenrs = ({ selected, setSelected }) => {
  // const { data: appointments = [] } = useQuery({
  //   queryKey: ["appointments"],
  //   queryFn: async () => {
  //     const result = await fetch("services.json");
  //     const data = await result.json();
  //     return data;
  //   }
  // });

  const [appointments, setAppointments] = useState([]);
  const [treatments, setTreatments] = useState(null);
  useEffect(() => {
    fetch("http://localhost:9000/appointmentOptions")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div>
      <p className="text-center text-secondary font-bold">
        You picked {format(selected, "PP")}
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointments.map((appointment) => (
          <SingleAppointment
            appointment={appointment}
            setTreatments={setTreatments}
          ></SingleAppointment>
        ))}
      </div>
      {treatments && (
        <Modal selected={selected} treatments={treatments}></Modal>
      )}
    </div>
  );
};

export default AvailableAppointmenrs;
