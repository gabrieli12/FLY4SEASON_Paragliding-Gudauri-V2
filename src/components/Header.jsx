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

        <i
          id="burger-menu"
          className="fa-solid fa-bars text-[1.7rem] cursor-pointer"
        ></i>
      </div>
    </header>
  );
}

export default Header;
