import React from "react";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Services from "../Services/Services";
import TreatmentBanner from "../TreatmentBanner/TreatmentBanner";
import Doctor from "../Doctor/Doctor";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <TreatmentBanner></TreatmentBanner>
      <Doctor></Doctor>
    </div>
  );
};

export default Home;
