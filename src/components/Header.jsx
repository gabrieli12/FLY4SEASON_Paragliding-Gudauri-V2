import React, { useEffect } from "react";
import { useState } from "react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 flex justify-center items-center w-full bg-transparent z-50 text-white  ${isSticky ? 'bg-black/60 backdrop-blur-sm py-2' : 'bg-transparent'} `}>
      <div className="w-[1200px] max-w-[90%] m-auto grid grid-cols-[50px_1fr_50px] grid-rows-[50px] justify-center items-center z-50 animate-header-open  ">
        <div className="font-bold text-[1.3rem] tracking-[2px]">FLY4SEASON</div>
        <ul className="p-0 m-0 list-none flex justify-center gap-[20px] font-[500]">
          <li>
            <a className="opacity-[0.7] hover:opacity-100" href="#">
              Home
            </a>
          </li>
          <li>
            <a
              className="opacity-[0.7] hover:opacity-100"
              href="./pages/about/index.html"
            >
              About US
            </a>
          </li>
          <li>
            <a
              className="opacity-[0.7] hover:opacity-100"
              href="./pages/contact/index.html"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* <i
          id="burger-menu"
          className="fa-solid fa-bars text-[1.7rem] cursor-pointer"
        ></i> */}

          <svg id="burger-menu" className="  w-7 fill-amber-50 hover:fill-gray-200  cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>

  </div>
    </header>
  );
}

export default Header;
