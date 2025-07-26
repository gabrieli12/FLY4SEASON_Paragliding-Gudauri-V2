import websiteMainLogo from "../assets/under-300px/site-main-logo.svg";

const Footer = () => {
  return (
    <footer className="relative grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-8 bg-black text-white px-20 py-20 pb-36">
      {/* Logo & Title */}
      <div className="flex flex-col gap-4 mt-10">
        <p className="text-6xl tracking-wider font-jersey w-72">
          Fly Four Season
        </p>
        <hr className="w-24 h-1 bg-red-600 border-red-600 rounded-full " />
        <img
          src={websiteMainLogo}
          alt="FLY4SEASON Paragliding Gudauri Georgia - Official Logo"
          className="w-[70px] h-[70px]  brightness-200"
        />
      </div>

      {/* Contact Info */}
      <ul className="mt-10 text-lg  font-roboto">
        <li className="text-xl  ">Gudauri</li>
        <li className="mt-5">
          <a
            href="https://mail.google.com/mail/u/0/#search/in%3Asent+gparagliding%40gmail.com?compose=new"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline "
          >
            gparagliding@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B995598555791&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white "
          >
            +995 598 555 791
          </a>
        </li>
        <li>Georgia, Gudauri</li>
        <li className="mt-4 text-base">
          <a
            href="https://www.google.com/maps/place/Gudauri,+Georgia/@42.476577,44.47761,14z"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 underline font-bold"
          >
            SEE ON MAP 
          </a>
        </li>
      </ul>

      {/* Pages */}
      <ul className="mt-8">
        <li className="text-lg font-medium mb-4 tracking-wide">Pages</li>
        {[
          { name: "Home", href: "./index.html" },
          { name: "Fly&Safety", href: "./pages/fly-safety/index.html" },
          { name: "Gallery", href: "./pages/gallery/index.html" },
          { name: "About Us", href: "./pages/about/index.html" },
          { name: "Contact Us", href: "./pages/contact/index.html" },
        ].map((page) => (
          <li key={page.name} className="my-2">
            <a
              href={page.href}
              className="relative inline-block after:block after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[3px] after:scale-x-0 after:bg-red-600 after:origin-bottom-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Developer Info + Socials */}
      <ul className="mt-8">
        <li className="text-lg font-medium mb-3">Development</li>
        <li>
          Designed By{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100014323875029"
            target="_blank"
            className="text-red-300 hover:underline"
            rel="noopener noreferrer"
          >
            Gabriel Molodini
          </a>
        </li>
        <li>
          Coded By{" "}
          <a
            href="https://github.com/gabrieli12"
            target="_blank"
            className="text-red-300 hover:underline"
            rel="noopener noreferrer"
          >
            Gabriel Molodini
          </a>
        </li>
        <li>
          Developer:{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100014323875029"
            target="_blank"
            className="text-red-300 hover:underline"
            rel="noopener noreferrer"
          >
            Gabriel Molodini
          </a>
        </li>
        <li className="mt-4">
          <a
            href="https://mail.google.com/mail/u/0/#search/in%3Achats+gabrielmolodini2%40gmail.com?compose=new"
            target="_blank"
            className="text-red-300"
            rel="noopener noreferrer"
          >
            gabrielmolodini2@gmail.com
          </a>
        </li>
      </ul>

      <ul>
        {/* Social Icons */}
        <li className="mt-6 text-md w-64">Do you want to know more information?</li>
        <li className="tracking-widest mt-8 text-sm">FOLLOW US</li>
        <li className="flex gap-4 mt-2 items-center">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B995598555791&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="our WhatsApp."
          >
            <svg className="w-[27px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>

            
          </a>
          <a
            href="https://t.me/Ika598555791"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="our telegram"
          >
            <svg className="w-[28px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#fff" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>
          </a>
          <a
            href="https://www.instagram.com/fly4season_paragliding?igsh=MW9yaDhzcTV2cGo3aQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="our instagram"
          >
            <svg className="w-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
          <a
            href="https://www.tiktok.com/@fly4season._parag?_t=8m9BCJugfXF&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="our TikTok"
          >
            <svg className="w-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
          </a>
          <a
            href="https://www.youtube.com/@fly4seasonparagliding37"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="our YouTube"
          >
            <svg className="w-[25px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
          </a>
        </li>

        <li className="mt-4">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B995598555791&text&type=phone_number&app_absent=0"
            target="_blank"
            className="text-white underline"
            rel="noopener noreferrer"
            aria-label="our WhatsApp."

          >
            +995 598 555 791
          </a>
        </li>
      </ul>

      {/* Copyright */}
      <p className="absolute bottom-0 left-0 w-full text-center py-2 text-sm bg-black z-50">
        &copy;2025 Fly4Season
      </p>
    </footer>
  );
};

export default Footer;
