import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* First Section: Hero Section */}
      <section className="bg-amber-200 flex items-center justify-center h-[100vh]">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center w-1/2 pl-10">
          <h1 className="text-8xl font-bold text-black mb-8">
            Rocket Single <br />
            Seater
          </h1>

          <a
            href="#"
            className="text-black underline text-sm hover:text-gray-800 transition"
          >
            Shop Now
          </a>
        </div>

        {/* Right Section */}
        <div className=" h-full flex items-center justify-center">
          <Image
            src="/sofaa.jpg"
            alt="Rocket Single Seater"
            width={500} 
            height={500} 
            className="object-contain"
          />
        </div>
      </section>
      
      </>
  );
}
export default Hero

