import React, { useEffect, useState, useCallback } from "react";
import Seasons from "../MainSliderInfo";
import Aside from "./Aside";

function Hero() {
  const [choosenSeasonIndex, setChoosenSeasonIndex] = useState(0);
  const [animateContent, setAnimateContent] = useState(true);
  const [animateBgImg, setAnimateBgImg] = useState(false);

  const thumbnailClick = useCallback((e) => {
    triggerAllAnimations();
    setChoosenSeasonIndex(parseInt(e.target.id));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChoosenSeasonIndex((prev) => (prev + 1) % Seasons.length);
    }, 14000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const triggerAllAnimations = () => {
    setAnimateContent(false);
    setAnimateBgImg(false);
    setTimeout(() => {
      setAnimateBgImg(true);
    }, 1);

    setTimeout(() => {
      setAnimateContent(true);
    }, 100);
  };

  return (
    <>
      <link fetchPriority="high" rel="preload" as="image" href={Seasons[0].mediumScreenImg} />

      <section className="h-screen relative text-[#eee] bg-[#010101] overflow-hidden ">

        <div>
          <div className="absolute inset-0 overflow-hidden  duration-[0.5s]   ">
            <img
              className={`w-full h-full object-cover ${
                animateBgImg ? "animate-heroBg" : ""
              } `}
              src={Seasons[choosenSeasonIndex].mediumScreenImg}
              alt={`Gudauri Paragliding - ${Seasons[choosenSeasonIndex].title}`}
              // loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80 z-10"></div>

            <div className="absolute left-[10%] top-[20%] max-md:top-[25%] w-[500px] max-w-[80%] z-10 contrast-200 drop-shadow-2xl ">
              <p
                className={`uppercase tracking-[10px] translate-Y-[30px]  opacity-0   ${
                  animateContent ? "animate-show-content" : ""
                }`}
              >
                Gudauri Paragliding
              </p>
              <h2
                className={`text-[100px] m-0 translate-Y-[30px]  opacity-0  max-sm:text-[60px] font-bold  ${
                  animateContent ? "animate-show-content" : ""
                }`}
              >
                {Seasons[choosenSeasonIndex].title}
              </h2>
              <p
                className={`translate-Y-[30px]  opacity-0     ${
                  animateContent ? "animate-show-content" : ""
                } `}
              >
                {Seasons[choosenSeasonIndex].intro}
              </p>
            </div>
          </div>
        </div>

        {/* button arrows */}
        <div className="absolute top-[30%] right-[50px] z-20 arrow-open flex gap-2 animate-arrow-open max-sm:top-[15%] ">
          <button
            aria-label="Previous season"
            className="bg-[#eee5] border-none font-mono w-[40px] h-[40px] rounded-[5px] text-[x-large] text-[#eee] duration-[0.5s] hover:bg-[#eee] hover:text-black"
            onClick={() => {
              setChoosenSeasonIndex(
                (prev) => (prev - 1 + Seasons.length) % Seasons.length
              );
            }}
          >
            {"<"}
          </button>
          <button
            aria-label="Next season"
            className="bg-[#eee5] border-none font-mono w-[40px] h-[40px] rounded-[5px] text-[x-large] text-[#eee] duration-[0.5s] hover:bg-[#eee] hover:text-black "
            onClick={() => {
              setChoosenSeasonIndex((prev) => (prev + 1) % 4);
            }}
          >
            {">"}
          </button>
        </div>

        {/* thumbnail */}
        <div className="absolute bottom-[50px] z-20 flex gap-[10px] w-full -[250px] pl-[50px] pr-[50px] box-border overflow-auto justify-center   delay-[0.4s] max-sm:justify-start animate-thumbnail-open ">
          {Seasons.map((item, index) => {
            return (
              <div
                key={index}
                onClick={thumbnailClick}
                id={index}
                className={`w-[130px] max-sm:w-[120px] max-sm:h-[190px] h-[200px]  duration-500 shrink-0  ${
                  Seasons[choosenSeasonIndex] == item
                    ? "brightness-100"
                    : "brightness-[.5]"
                }`}
              >
                <img
                  id={index}
                  className="w-full h-full object-cover rounded-[10px] "
                  src={item.smallImage}
                  // src="../public/under-300px/summer.webp"
                  alt={`Image of gudauri paragliding in the ${item.title} season`}
                  loading="lazy"
                />
                <div className="absolute right-[10px] bottom-[10px] left-[10px]">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Hero;
