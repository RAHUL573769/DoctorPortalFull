import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointmenrs from "./AvailableAppointmenrs";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>
      <AvailableAppointmenrs
        selected={selected}
        setSelected={setSelected}
      ></AvailableAppointmenrs>
    </div>
  );
};

export default Appointment;
