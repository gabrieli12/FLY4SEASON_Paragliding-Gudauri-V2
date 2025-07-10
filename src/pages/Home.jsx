import React, { Suspense } from "react";
import { Link } from "react-router-dom";

// images
import lasha from "../assets/under-300px/pilots/lasha.webp";
import irakli from "../assets/under-300px/pilots/irakli.webp";
import img1 from "../assets/under-300px/pilots/img1.webp";
import img2 from "../assets/under-300px/pilots/img2.webp";

// gif

const OtherComponent = React.lazy(() => import("../components/Hero"));

const Button = React.memo(({ value }) => {
  return (
    <button className=" group relative overflow-hidden cursor-pointer py-4 px-[30px] border-none rounded-[10px] font-jersey text-[1.2rem] max-lg:text-[1rem] tracking-[1px] text-[#090f53] bg-[#00000018] transition-colors duration-500 hover:text-white max-md:text-[1.2rem] max-sm:text-[1rem] max-sm:py-3 max-sm:px-6">
      <span className="relative z-10">{value}</span>

      <span className="bottom-0 absolute left-0 h-0 w-full bg-black rounded-t-[50%] transition-all duration-[800ms] ease-in-out group-hover:h-[80%] -z-0"></span>
    </button>
  );
})

function Home() {
  return (
    <>
      <title>test</title>


      <main className="relative min-h-screen">
        <Suspense
          fallback={
            <div className="absolute w-full h-full flex flex-col text-white justify-center items-center gap-16 bg-[#0a3351] max-sm:gap-12">
              <h2 className="text-4xl font-winky max-sm:text-3xl">FLY4SEASON</h2>
              <div className="flex gap-3">
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white  "
                  role="status"
                ></div>

                <span className="text-2xl font-jersey max-sm:text-xl">Loading...</span>
              </div>
            </div>
          }
        >
          <OtherComponent />

          {/* <Hero /> */}
          <section
            className={`p-7 pt-12 w-full flex justify-center items-start gap-28 bg-[url('./assets/gifs/snow.gif')] bg-center mt-32 max-lg:gap-14 max-md:flex-col `}
          >
            <div className=" flex flex-col justify-start items-start">
              <p className="text-5xl font-jersey max-w-96 max-sm:text-4xl">
                Who are we? <br /> Why <br />
                should you trust us?
              </p>
              <hr className="h-1.5 bg-red-500 w-[150px] border-none rounded-full  mb-[30px] mt-2" />

              <p className="max-w-[600px] opacity-90 max-sm:text-sm">
                At our Gudauri paragliding company, we create unforgettable
                flights, prioritizing safety with seasoned pilots. Your
                well-being is our sacred commitment, fortified with unwavering
                dedication
              </p>

              <div className="flex justify-start items-center gap-3 mt-10  ">
                <Link to={"fly"}>
                  <Button value={"About Us"} />
                </Link>
                <Link to={"fly"}>
                  <Button value={"WHY WITH US?"} />
                </Link>
              </div>
            </div>

            <div className="w-[700px] grid grid-cols-2 grid-rows-[200px_200px] gap-5 overflow-hidden mt-2.5 max-md:w-full max-lg:gap-2 max-md:gap-5 max-sm:gap-2 ">
              <div className="overflow-hidden">
                <img
                  className="w-full h-full object-cover object-top rounded-md hover:brightness-90 hover:scale-110 duration-500 "
                  src={lasha}
                  alt="our company pilot 1"
                  loading="lazy"
                />
              </div>

              <div className="overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-md hover:brightness-90 hover:scale-110 duration-500"
                  src={img2}
                  alt="paragliding picture"
                  loading="lazy"
                />
              </div>

              <div className="overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-md hover:brightness-90 hover:scale-110 duration-500"
                  src={img1}
                  alt="Paragliding and a wedding together"
                  loading="lazy"
                />
              </div>

              <div className="overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-md hover:brightness-90 hover:scale-110 duration-500"
                  src={irakli}
                  alt="our company pilot 2"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </Suspense>
      </main>
    </>
  );
}

export default Home;
