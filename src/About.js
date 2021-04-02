import React from "react";
import { useParams } from "react-router-dom";

function About() {
  const { slug } = useParams();

  return (
    <div>
      Hello from About
      {slug}
    </div>
  );
}

export default About;
