import React, { useState } from "react";
import heroBg from '../assets/slider-imgs/spring.png'
import Seasons from "../MainSliderInfo";

function Hero() {

  const [choosenSeason, setChoosenSeason] = useState(Seasons[0])

  const thumbnailClick = (e) => {
    setChoosenSeason(Seasons[e.target.id])
  }



  return (
    <section className="h-screen relative text-[#eee] bg-[#010101] overflow-hidden">
      <a
        href="https://api.whatsapp.com/send/?phone=%2B995598555791&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <button className="fixed right-[15px] bottom-[15px] z-50 bg-[greenyellow] p-[10px] text-[1.3rem] rounded-[5px] cursor-pointer tracking-[0.5px] text-[#04043b]">whatsapp</button>
      </a>

      <div>
        <div className="absolute inset-0 overflow-hidden  duration-[0.5s] ">
          <img
            className="w-full h-full object-cover"
            src={choosenSeason.img}
            alt="Spring season paragliding gudauri background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/90 z-10"></div>

          <div className="absolute left-[10%] top-[20%] w-[500px] max-w-[80%] z-10">
            <p className="uppercase tracking-[10px] translate-Y-[30px] blur-[20px] opacity-0 showContent">Gudauri Paragliding</p>
            <h2 className="text-[100px] m-0 translate-Y-[30px] blur-[20px] opacity-0 showContent delay-1000 max-sm:text-[60px]">{choosenSeason.title}</h2>
            <p className="translate-Y-[30px] blur-[20px] opacity-0 showContent duration-[1.3s]">
              {choosenSeason.intro}
            </p>
          </div>
        </div>
      </div>


        {/* button arrows */}
        <div className="absolute top-[30%] right-[50px] z-20 arrow-open">
          <button className="bg-[#eee5] border-none font-mono w-[40px] h-[40px] rounded-[5px] text-[x-large] text-[#eee] duration-[0.5s] hover:bg-[#eee] hover:text-black ">{">"}</button>
          <button className="bg-[#eee5] border-none font-mono w-[40px] h-[40px] rounded-[5px] text-[x-large] text-[#eee] duration-[0.5s] hover:bg-[#eee] hover:text-black ">{"<"}</button>
        </div>


        {/* thumbnail */}
        <div className="absolute bottom-[10px] z-20 flex gap-[10px] w-full -[250px] pl-[50px] pr-[50px] box-border overflow-auto justify-center  thumbnail-open delay-[0.4s] max-sm:justify-start ">
          {
            Seasons.map((item, index) => {
              return (
                <div key={index} onClick={thumbnailClick} id={index} className="w-[130px] h-[200px] brightness-[.5] duration-500 shrink-0 active:brightness-100" >
                  <img id={index} className="w-full h-full object-cover rounded-[10px]" src={item.img} alt={`Image of gudauri paragliding in the ${item.title} season`} />
                  <div className="absolute right-[10px] bottom-[10px] left-[10px]">{item.title}</div>
                </div>
              )
            })
          }

        </div>

    </section>
  );
}

export default Hero;
