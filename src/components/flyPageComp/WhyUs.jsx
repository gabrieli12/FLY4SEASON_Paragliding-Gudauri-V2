const WhyWithUs = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center bg-gradient-to-b from-white via-blue-200/40 to-white  backdrop-blur-md text-black py-28 px-16 mt-24  overflow-hidden max-sm:px-3">
      <div
        className="w-1/2 p-4 max-lg:w-full max-sm:p-0"
      >
        <div className="flex items-center pl-4">
          <div className="w-20 h-[3px] bg-cyan-700 rounded-full mr-4"></div>
          <p className="text-lg font-medium">THE BEST IN THEIR FIELD</p>
        </div>

        <div className="mt-4">
          <p className="text-4xl font-jersey mb-4">WHY WITH US?</p>
          <ul className="space-y-3 w-full">
            {[
              "Paragliding pioneers in Georgia, more than 9 years we have been enjoying paragliding in the sky of Georgia.",
              "In our company, only professional pilots with licenses confirming their qualifications, 10 years of experience.",
              "The equipment undergoes a daily inspection, the pilots undergo a daily medical check (all our pilots are non-smokers and non-drinkers).",
              "All flights are conducted in accordance with the rules and regulations of the Federation.",
              "We are the International Federation of Paragliding and Hang Gliding of Georgia.​",
            ].map((item, i) => (
              <li
                key={i}
                className="pl-14 bg-[url('/send-mark.png')] bg-no-repeat bg-left bg-[length:40px] text-lg max-sm:text-base  leading-7 text-gray-700 font-roboto"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vAMjGIWwqQo?si=JDTSm9ZK33m924Ut"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg mt-10 lg:mt-0 lg:ml-10 w-[560px] max-sm:w-full max-sm:h-[220px] max-xl:h-[250px] max-xl:w-[480px]"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default WhyWithUs