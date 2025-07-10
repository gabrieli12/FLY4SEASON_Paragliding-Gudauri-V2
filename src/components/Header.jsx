import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useData } from "./Provider";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { isSidebarOpen, setIsSidebarOpen } = useData();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openSideBar = useCallback(() => {
    setIsSidebarOpen(true);
  }, [])

  return (
    <>

      <header
        className={`fixed top-0 pt-3 pb-4 flex justify-center items-cente transition-all duration-1000  w-full z-50 text-white  ${
          isSticky ? "bg-black/60 backdrop-blur-sm py-2" : ""
        }  ${isSidebarOpen ? "bg-black backdrop-blur-sm" : ""} `}
      >
        <div className=" w-[1600px] max-w-[90%] m-auto grid grid-cols-[150px_1fr_200px] grid-rows-[50px] justify-center items-center z-50 animate-header-open max-md:grid-cols-[150px_1fr_50px] gap-5  ">
          <div className="font-bold text-[1.3rem] tracking-[2px]">
            FLY4SEASON
          </div>
          <ul className="relative p-0 m-0 list-none flex justify-center gap-[20px] font-[500] max-md:hidden  ">
            <li>
              <Link className="opacity-[0.7] hover:opacity-100" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="opacity-[0.7] hover:opacity-100" to="fly">
                Fly & Safety
              </Link>
            </li>

            <li>
              <Link className="opacity-[0.7] hover:opacity-100" to="about">
                About US
              </Link>
            </li>
            <li>
              <Link className="opacity-[0.7] hover:opacity-100" to="contact">
                Contact Us
              </Link>
            </li>

            <li>
              <Link className="opacity-[0.7] hover:opacity-100" to="gallery">
                Gallery
              </Link>
            </li>
          </ul>

          {/* <i
          id="burger-menu"
          className="fa-solid fa-bars text-[1.7rem] cursor-pointer"
        ></i> */}

          <svg
            id="burger-menu"
            className={`w-7 fill-amber-50 hover:fill-gray-200 duration-500  cursor-pointer max-md:col-start-3 max-md:row-start-1 md:hidden ${
              isSidebarOpen ? "opacity-0 -z-10" : "opacity-100"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            onClick={openSideBar}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>

          <svg
            id="burger-menu"
            className={`w-9 fill-amber-50 hover:fill-gray-200 duration-500  cursor-pointer max-md:col-start-3 max-md:row-start-1 md:hidden ${
              isSidebarOpen ? "opacity-100" : "opacity-0 -z-10"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            onClick={() => useCallback(setIsSidebarOpen(false), [])}
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>

          <h2 className="max-md:col-start-2 max-md:row-start-1 place-self-end self-center max-sm:hidden text-lg tracking-wide underline cursor-pointer  ">
            <a
              target="blank"
              href="https://api.whatsapp.com/send/?phone=%2B995598555791&text&type=phone_number&app_absent=0"
            >
              +995 598 555 791
            </a>
          </h2>
        </div>
      </header>
    </>
  );
}

export default Header;
