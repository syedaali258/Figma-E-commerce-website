import React from "react";
import Image from "next/image";

export const Sec1 = () => {
  return (
    <section className="bg-amber-100 flex items-center justify-center h-[100-vh]">
      <div className="flex flex-col items-start justify-center w-1/2 pl-10">
        <h1 className="text-8xl font-bold text-black mb-8">
          Rocket Single <br />
          Seater
        </h1>
        <a
          href="/sofa"
          className="text-black underline underline-offset-8 text-sm hover:text-gray-800 transition px-10"
        >
          Shop Now
        </a>
      </div>

      <div className="w-1/2 h-full flex items-center justify-center">
        <Image
          src="/sofaa-removebg-preview.png"
          alt="Rocket Single Seater"
          width={1000}
          height={1000}
          className="object-contain"
        />
      </div>
    </section>
  );
};