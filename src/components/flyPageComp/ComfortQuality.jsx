const ComfortAndQuality = () => (
  <section className="flex flex-col lg:flex-row justify-center items-center bg-gradient-to-t from-white to-blue-200/40 px-4 max-sm:px-1 py-10 shadow-2xl shadow-cyan-500 mt-32 pb-20   ">
    <div className="max-w-xl p-4 max-sm:px-3" >
      <p className="text-4xl font-display mb-4 font-jersey max-sm:w-full ">COMFORT AND QUALITY!</p>
      <ul className="space-y-3">
        {[
          "Our qualified managers are friendly, accommodating and multilingual.",
          "During the flight, video-photography is provided on professional GoPro equipment - Insta360 of HD quality - 4K +.5.7K",
          "You will be provided with: warm clothes, gloves and everything you need for a safe flight.",
          "Transfer around Gudauri - free of charge",
        ].map((item, i) => (
          <li
            key={i}
            className="pl-14 bg-[url('/send-mark.png')] bg-no-repeat bg-left bg-[length:40px] max-sm:text-base leading-7 text-gray-700 text-lg  "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

    <div
      className="flex justify-center flex-wrap gap-4 mt-10 lg:mt-0 lg:ml-10"
    >
      <div className="flex flex-col items-center">
        <div className="w-[330px] h-[180px] bg-[url('/images/pilots/lasha.webp')] bg-cover rounded-md shadow-md"></div>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B995598555791&text&type=phone_number&app_absent=0"
          target="_blank"
          className="mt-4 px-6 py-3 bg-blue-900 text-white rounded-lg text-lg hover:bg-blue-800 transition"
        >
          BOOK NOW
        </a>
      </div>
      <div className="w-[330px] h-[180px] bg-[url('/images/pilots/irakli.webp')] bg-cover rounded-md shadow-md"></div>
    </div>
  </section>
);


export default ComfortAndQuality