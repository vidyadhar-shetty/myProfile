import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
const Features = () => {
  return (
    <section id="features" className="my-section">
    <Title des="What I Do" />
    <div className="my-grid">
      {featuresData.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  </section>
  
  );
};

export default Features;
