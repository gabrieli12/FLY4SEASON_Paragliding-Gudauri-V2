import React from "react";

import img1 from "/images/gallery-images/img1.webp";
import img2 from "/images/gallery-images/img2.webp";
import img3 from "/images/gallery-images/img3.webp";
import img4 from "/images/gallery-images/img4.webp";
import img5 from "/images/gallery-images/img5.webp";
import img6 from "/images/gallery-images/img6.webp";
import img7 from "/images/gallery-images/img7.webp";
import img8 from "/images/gallery-images/img8.webp";
import img9 from "/images/gallery-images/img9.webp";
import img10 from "/images/gallery-images/img10.webp";
import img11 from "/images/gallery-images/img11.webp";
import img12 from "/images/gallery-images/img12.webp";
import img13 from "/images/gallery-images/img13.webp";
import img14 from "/images/gallery-images/img14.webp";
import img15 from "/images/gallery-images/img15.webp";
import img16 from "/images/gallery-images/img16.webp";
import img17 from "/images/gallery-images/img17.webp";
import img18 from "/images/gallery-images/img18.webp";
import img19 from "/images/gallery-images/img19.webp";
import img20 from "/images/gallery-images/img20.webp";
import img21 from "/images/gallery-images/img21.webp";
import img22 from "/images/gallery-images/img22.webp";

import ContactBtn from "../components/ContactBtn";

let images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
];

function Gallery() {
  return (
    <>
      <title>
        FLY4SEASON - Paragliding in Gudauri Gallery - Our Work in Pictures
      </title>

      <meta
        name="description"
        content="Explore our breathtaking gallery of mountain views from North Lake Tahoe. See stunning landscapes, crystal-clear lakes, and more!"
      />
            <link rel="canonical" href="https://paraglidinggudauri.com/gallery" />


      
    

      <main>
        <ContactBtn />
        <section className="w-full h-[60vh] relative flex justify-center items-center px-7 ">
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

          <h2 className="text-amber-100 z-10 text-5xl font-winky max-lg:text-4xl text-center max-md:text-4xl max-sm:w-full max-lg:leading-12 max-sm:leading-10 max-sm:text-3xl max-w-[790px] leading-16 ">
            HELLO! WELCOME TO FLY4SEASON PHOTO&VIDEO GALLERY
          </h2>
        </section>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 justify-items-center items-center backdrop-blur-2xl p-5 mt-16 mb-40">
          {images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt={"paragliding gudauri"}
                className="w-[95%] h-[300px] object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                loading="lazy"
              />
            );
          })}

          {/* <img src={img1} alt="" /> */}
        </section>
      </main>
    </>
  );
}

export default Gallery;
