import React from "react";
import clock from "../ImagesFoder/assets/icons/clock.svg";
import marker from "../ImagesFoder/assets/icons/marker.svg";
import phone from "../ImagesFoder/assets/icons/phone.svg";
import SingleInfo from "./SingleInfo";

const Info = () => {
  const cardInfo = [
    {
      id: 1,
      name: "Opening Hours",
      description: "OPening 9am to 5pm",
      icon: clock,
      bgClass: "bg-gradient-to-r from-green-400 to-blue-500 "
    },
    {
      id: 2,
      name: "Opening Location",
      description: "OPening 9am to 5pm",
      icon: marker,
      bgClass: "bg-gradient-to-r from-cyan-500 to-blue-50"
    },
    {
      id: 3,
      name: "Our Contacts",
      description: "+918017102283",
      icon: phone,
      bgClass: "bg-gradient-to-r from-green-400 to-blue-500 "
    }
  ];
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cardInfo.map((card) => (
        <SingleInfo card={card}></SingleInfo>
      ))}
    </div>
  );
};

export default Info;
