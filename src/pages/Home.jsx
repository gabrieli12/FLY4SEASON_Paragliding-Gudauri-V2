import WhoAre from "../components/homePageComp/WhoAre";

// components
import OnlinePayment from "../components/OnlinePayment";
import FlyTypes from "../components/homePageComp/FlyType";
import AboutParagliding from "../components/homePageComp/AboutParagliding";
import YouTube from "../components/homePageComp/YouTube";
import Feedback from "../components/homePageComp/Feedback";

import Footer from "../components/Footer";
import Hero from "../components/Hero";



function Home() {
  return (
    <>
      <title>test</title>

      <main className="relative min-h-screen">
          <Hero />

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

          <Footer />
      </main>
    </>
  );
}

export default Home;
