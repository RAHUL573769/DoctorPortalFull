import React from "react";
import flouride from "../ImagesFoder/assets/images/fluoride.png";
import cavity from "../ImagesFoder/assets/images/cavity.png";
import whitenong from "../ImagesFoder/assets/images/whitening.png";
import SingleInfo from "../Info/SingleInfo";
import SingleService from "./SingleService";
const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: "Floride Treatment",
      descrption: "This is Floride Treament",
      img: flouride
    },
    {
      id: 2,
      name: "Cavity Filling",
      descrption: "This is Cavity Filing",
      img: cavity
    },
    {
      id: 1,
      name: "Whitening",
      descrption: "This is Whitenning",
      img: whitenong
    }
  ];
  return (
    <div className="mt-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {serviceData.map((services) => (
          <SingleService key={services.id} services={services}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
