// src/components/Hero.tsx
import React from "react";
import { Sec1 } from "@/app/components/section1";  // Import sections
import Sec2 from "@/app/components/section2";
import Sec3 from "@/app/components/section3";
import Sec4 from "@/app/components/section4";
import Sec5 from "@/app/components/section5";
import Sec6 from "@/app/components/section6";
import Sec7 from "@/app/components/section7";


const Hero = () => {
  return (
    <div>
      {/* Hero Section - Includes all sections from Sec1 to Sec6 */}
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6 />
    </div>
  );
};

export default Hero;