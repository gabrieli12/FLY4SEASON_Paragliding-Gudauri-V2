import React, { Suspense } from "react";
import WhoAre from "../components/homePageComp/WhoAre";

// components
import OnlinePayment from "../components/OnlinePayment";
import FlyTypes from "../components/homePageComp/FlyType";
import AboutParagliding from "../components/homePageComp/AboutParagliding";
import YouTube from "../components/homePageComp/YouTube";
import Feedback from "../components/homePageComp/Feedback";

// gif

const OtherComponent = React.lazy(() => import("../components/Hero"));

function Home() {
  return (
    <>
      <title>test</title>

      <main className="relative min-h-screen">
        <Suspense
          fallback={
            <div className="absolute w-full h-full flex flex-col text-white justify-center items-center gap-16 bg-[#0a3351] max-sm:gap-12">
              <h2 className="text-4xl font-winky max-sm:text-3xl">
                FLY4SEASON
              </h2>
              <div className="flex gap-3">
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white  "
                  role="status"
                ></div>

                <span className="text-2xl font-jersey max-sm:text-xl">
                  Loading...
                </span>
              </div>
            </div>
          }
        >
          <OtherComponent />

          <WhoAre />
          <section className="relative min-h-screen">
            <OnlinePayment />

            <section className=" pt-16 backdrop-blur-xl bg-amber-100/30 border-t-4 border-amber-100 w-full sticky top-0 ">
              <FlyTypes />
            </section>
          </section>
          <AboutParagliding />
          <YouTube />
          <Feedback />
        </Suspense>
      </main>
    </>
  );
}

export default Home;
