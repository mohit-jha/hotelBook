import React from "react";
import Section1 from "./Section1";
import Featured from "./Featured";
import Explore from "./Explore";
import Clients from "./Clients";
import Section5 from "./Section5";

function index() {
  return (
    <main>
      <Section1 />
      <Section5 />
      <Featured />
      <Clients />
      <Explore />
    </main>
  );
}

export default index;
