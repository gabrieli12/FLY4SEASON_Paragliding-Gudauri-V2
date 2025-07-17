import React from "react";

import standart from '../../assets/under-300px/standart.webp'
import aerobatic from '../../assets/under-300px/aerobatic.webp'
import long from '../../assets/under-300px/img2.webp'
import test from '../../assets/slider-imgs/summer.webp'


const flyTypes = [
  {
    title: "STANDARD",
    img: test,
    desc: "The cost of a standard flight is 350 GEL, video recording is included, the duration of the flight is 15 minutes",
    alt: "Winter paragliding flight in Gudauri at a unique price",
  },
  {
    title: "LONG FLIGHT",
    img: long,
    desc: "A long flight is 30 minutes and costs 500 GEL, Also video recording and more emotions",
    alt: "Long paragliding flight in Gudauri at an affordable price",
  },
  {
    title: "AEROBATICS",
    img: aerobatic,
    desc: "Acro flight is for more extreme and adrenaline lovers, the duration of the flight is 15 minutes and acrobatic tricks are also added, the price is 500 GEL",
    alt: "Aerobatics paragliding in Gudauri at the best price",
  },
];

const FlyTypes = () => {
  return (
    <section
      className="flex justify-center items-center mt-5 px-5 py-12  "
      
    >
      <div className="flex flex-wrap justify-center items-center gap-32 " >
        {flyTypes.map((type, idx) => (
          <a
            href="https://api.whatsapp.com/send/?phone=%2B995598555791&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            data-aos="fade"
          >
            <div className="relative max-w-[350px] h-[500px] shadow-2xl shadow-amber-100 rounded-2xl overflow-hidden group cursor-pointer  ">
              <img
                src={type.img}
                alt={type.alt}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 "
              />
              <div className="absolute bottom-0 w-full h-[90px] bg-black/40 text-white px-7 py-5 transition-all duration-300 group-hover:h-[250px] max-sm:h-[270px] group-hover:bg-black/60 group-hover:backdrop-blur-xs max-lg:h-[250px]">
                <h2 className="text-2xl font-bold mt-2">{type.title}</h2>
                <p className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 mt-4 text-lg  max-lg:opacity-100 max-lg:visible">
                  {type.desc}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FlyTypes;
