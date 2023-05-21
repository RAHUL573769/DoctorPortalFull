import React, { useState } from "react";
import chair from "../../ImagesFoder/assets/images/chair.png";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = (props) => {
  // console.log(props);
  // const [selected, setSelected] = useState(new Date());
  return (
    <div className="my-6">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker
              mode="single"
              selected={props.selected}
              onSelect={props.setSelected}
            />
            <p>You picked {format(props.selected, "PP")}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
