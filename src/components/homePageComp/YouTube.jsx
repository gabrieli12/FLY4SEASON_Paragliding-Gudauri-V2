import React from "react";

function YouTube() {
  return (
    <section className="flex w-full justify-evenly items-center p-10 gap-16 flex-wrap max-sm:px-3">
      <div className="flex flex-col justify-start gap-1 max-w-[440px] max-sm:w-full">
        <p className="text-md ">Experienced Pilot: <span className="font-bold text-red-950 ml-2">Lasha Lazviashvili</span></p>
        <iframe
        className="max-w-[440px] h-[240px] max-sm:w-full max-sm:h-[180px]"
          width="440"
          height="240"
          src="https://www.youtube.com/embed/3Ms7LwWXbBg?si=ZULX6tXPun9G4UN-"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="flex flex-col justify-start gap-1 max-w-[440px] max-sm:w-full">
        <p className="text-md ">Experienced Pilot: <span className="font-bold text-red-950 ml-2">Irakli Kaishauri</span></p>
        <iframe
        className="max-w-[440px] h-[240px] max-sm:w-full max-sm:h-[180px]"
          width="440"
          height="240"
          src="https://www.youtube.com/embed/jfH9NQoObmY?si=QVyYh4nofAjMx4Oq"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex flex-col justify-start gap-1 max-w-[440px] max-sm:w-full">
        <p className="text-md ">Experienced Pilot: <span className="font-bold text-red-950 ml-2">Irakli Kaishauri</span></p>
        <iframe
        className="max-w-[440px] h-[240px] max-sm:w-full max-sm:h-[180px]"
          width="440"
          height="240"
          src="https://www.youtube.com/embed/O_AlmyHNDNw?si=ooDG_4TTMf3tUUWb"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="flex flex-col justify-start gap-1 max-w-[440px] max-sm:w-full">
        <p className="text-md ">Experienced Pilot: <span className="font-bold text-red-950 ml-2">Lasha Lazviashvili</span></p>
        <iframe
        className="max-w-[440px] h-[240px] max-sm:w-full max-sm:h-[180px]"
          width="440"
          height="240"
          src="https://www.youtube.com/embed/-rtVtksejJc?si=32pRhfpfO9Mq_dMd"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default YouTube;
