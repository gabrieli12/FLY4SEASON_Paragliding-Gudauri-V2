import React from "react";
import bgVideo from "../assets/videos/DJI 05544 (5).webm";
import { Button } from "./homePageComp/WhoAre";

function OnlinePayment() {
  return (
    <section className="sticky top-0 min-h-screen  w-full flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        preload="metadata"
        className="absolute top-0 left-0  object-cover contrast-125 brightness-50 min-h-screen w-full "
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-30 flex flex-col justify-center items-center max-sm:items-start  gap-7 p-10 px-16 max-md:px-10 max-sm:px-7 ">
        <h2 className="text-4xl text-amber-100 text-center max-md:text-3xl max-sm:text-2xl max-sm:text-left w-full">Fly4Season - Paragliding Gudauri</h2>
        <p className="text-center text-amber-50 text-xl font-poppins tracking-wide leading-9 max-w-[1000px] max-md:text-lg max-sm:text-md max-lg:leading-7 max-sm:text-left  ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          modi quos nulla. Incidunt, veniam magnam animi, perspiciatis quam
          deleniti aut aspernatur repudiandae accusantium minima nam doloribus
          atque, doloremque velit corrupti?
        </p>
        <Button className='text-4xl' value='Book Now' bg='amber-100'  />
      </div>
    </section>
  );
}

export default OnlinePayment;
