import WhyWithUs from "../components/flyPageComp/WhyUs";
import PilotCard from "../components/flyPageComp/PilotCard";
import ComfortAndQuality from "../components/flyPageComp/ComfortQuality";
import ContactBtn from "../components/ContactBtn";

function Fly() {
  return (
    <>
      <title>
        Why Choose Us? - Trusted Partner for Your Needs - FLY4SEASON -
        Paragliding in Gudauri
      </title>
      <meta
        name="description"
        content="Discover the many reasons why FLY4SEASON - Paragliding in Gudauri, Georgia is the perfect partner for your needs. We offer comfort and quality, experience pilots, Safety, Transfer around Gudauri - free of charge, and more!"
      />
            <link rel="canonical" href="https://paraglidinggudauri.com/fly" />


      <main className="min-h-screen">
        <ContactBtn />
        <section className="w-full h-[50vh] relative flex justify-center items-center px-7 ">
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

          <h2 className="text-amber-100 z-10 text-5xl font-jersey max-lg:text-4xl text-center max-md:text-4xl max-sm:w-full">
            PARAGLIDING ONLY WITH PROFESSIONALS!
          </h2>
        </section>

        <WhyWithUs />
        <section className="w-full flex max-2xl:flex-col justify-center items-center px-4 py-10 gap-6 max-sm:px-0">
          <PilotCard
            name="Irakli Kaishauri"
            imageUrl="/images/pilots/irakli.webp"
            stats={[
              "Co-founder of Fly4Season paragliding",
              "Pilot – Instructor",
              "Member of the International Federation of Paragliding of Georgia",
              "Expert of paragliding sports in Georgia.",
              "Over 9,000 flights",
              "Experience: more than 10 years",
            ]}
          />
          <PilotCard
            name="Lasha Lazviashvili"
            imageUrl="/images/pilots/lasha.webp"
            stats={[
              "Co-founder of Fly4Season paragliding",
              "Pilot – Instructor",
              "Member of the International Federation of Paragliding of Georgia",
              "Expert of paragliding sports in Georgia.",
              "Over 7,000 flights",
              "Experience: more than 7 years",
            ]}
          />
        </section>
        <ComfortAndQuality />
      </main>
    </>
  );
}

export default Fly;
