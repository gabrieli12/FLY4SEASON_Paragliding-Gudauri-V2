import TeamSection from "../components/aboutPageComp/TeamSec";
import Footer from "../components/Footer";


function About() {
  return (
    <main className="w-full ">
      <section className="relative w-full h-screen flex justify-center items-center flex-col gap-14 p-16 max-md:px-5 max-sm:gap-10 ">
        <video
          autoPlay
          loop
          muted
          preload="metadata"
          className="absolute top-0 left-0  object-cover contrast-125 brightness-50 h-full blur-[2px]  w-full "
          loading="lazy"
        >
          <source src={"/video-2.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2 className="text-amber-100 text-6xl z-10 font-winky tracking-wide max-md:text-5xl max-sm:text-3xl">
          Paragliding gudauri
        </h2>

        <h2 className="text-xl text-amber-50 z-10 text-center max-w-3/4 tracking-wide leading-9 max-lg:max-w-full max-md:text-lg max-md:leading-8 max-sm:text-sm max-sm:leading-6 ">
          Company Fly4Season was founded in 2017 and operates commercial
          paragliding flights in Gudauri and Ananuri. This company was formed by
          professionals united under one thought. For us, this field, in
          addition to income, is also a favorite activity, which makes our
          service more attractive and pleasant for those who want it. Our goal
          is to create a safe, unforgettable and emotional service for all those
          who want it, and we record these emotions with video recording as a
          memory for them. Be safe fly with us!
        </h2>
      </section>

      <section className=" flex justify-center items-center p-20 max-sm:px-1 ">
        <div className="grid grid-cols-2 max-w-[1300px] gap-10 max-lg:grid-cols-1 max-lg:w-[500px] max-sm:w-full ">
          <img className="object-cover w-full" src="/images/licence/lasha.jpg" alt="" />
          <img className="object-cover rounded-xl" src="/images/licence/licence.jpg" alt="" />
          <img className="object-cover rounded-xl" src="/images/licence/kasha.png" alt="" />
          <img className="object-cover rounded-xl" src="/images/licence/licence2.png" alt="" />
        </div>
      </section>

      <TeamSection />
    </main>
  );
}

export default About;
